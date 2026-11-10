"""Exporta somente os arquivos públicos para dist/, sem os materiais de referência."""
from pathlib import Path
import shutil

root = Path(__file__).resolve().parents[1]
destination = root / 'dist'
if destination.exists():
    shutil.rmtree(destination)
destination.mkdir()
for name in ('index.html', 'reset.css', 'tokens.css', 'style.css', 'sitemap.xml', 'robots.txt'):
    shutil.copy2(root / name, destination / name)
for name in ('assets', 'blocks', 'casos', 'privacidade', 'solucoes'):
    shutil.copytree(root / name, destination / name)
print(f'Site estático exportado para {destination}')
