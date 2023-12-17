## What does this extension do?
This Firefox extension replaces the [Overleaf logo](https://images.ctfassets.net/nrgyaltdicpt/6qSXAo1CYEeBn5RkKLOR64/19c74bfb9a32772e353ff25c6f0070f5/ologo_square_colour_light_bg.png) with the [Konoha leaf symbol](https://raw.githubusercontent.com/Devoev/texnoha/main/assets/leaf.png) on the [TU Darmstadt ShareLaTeX website](https://sharelatex.tu-darmstadt.de).

| Original Logo | New Logo |
|---------------|----------|
| <img src=https://images.ctfassets.net/nrgyaltdicpt/6qSXAo1CYEeBn5RkKLOR64/19c74bfb9a32772e353ff25c6f0070f5/ologo_square_colour_light_bg.png width=250> | <img src=https://raw.githubusercontent.com/Devoev/texnoha/main/assets/leaf.png width=250> |

## How to install
Build and sign it yourself using [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
- Install web-ext `npm install --global web-ext`
- Package the extension `web-ext build`
- Sign the extension `web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET`

Download signed extension from [TODO](todo)
