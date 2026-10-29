"""Verifica destinos e âncoras locais das páginas públicas, sem dependências."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

root = Path(__file__).resolve().parents[1]
pages = [root / 'index.html', *sorted((root / 'casos').glob('*/index.html')),
         root / 'privacidade/index.html']

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.ids, self.refs, self.errors = path, set(), [], []
        self.h1 = 0
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'h1':
            self.h1 += 1
        if 'id' in attrs:
            if attrs['id'] in self.ids:
                self.errors.append(f'ID repetido: {attrs["id"]}')
            self.ids.add(attrs['id'])
        for key in ('href', 'src'):
            if attrs.get(key):
                self.refs.append(attrs[key])

parsed = {p: Page(p) for p in pages}
errors = []
for path, page in parsed.items():
    errors.extend(f'{path.relative_to(root)}: {e}' for e in page.errors)
    if page.h1 != 1:
        errors.append(f'{path.relative_to(root)}: esperado um h1, encontrado {page.h1}')
    for ref in page.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        target = root / unquote(url.path).lstrip('/') if url.path.startswith('/') else path.parent / unquote(url.path)
        if not url.path:
            target = path
        if target.is_dir():
            target /= 'index.html'
        target = target.resolve()
        if not target.exists():
            errors.append(f'{path.relative_to(root)}: destino ausente: {ref}')
        elif url.fragment and target in parsed and unquote(url.fragment) not in parsed[target].ids:
            errors.append(f'{path.relative_to(root)}: âncora ausente: {ref}')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'{len(parsed)} páginas: links locais, arquivos, âncoras e IDs válidos.')
