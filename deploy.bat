cd dist
git init
echo theme: jekyll-theme-cayman > _config.yml
git remote add origin https://github.com/DET171/home
git add .
git commit -am 'deploy'
git push --all --force