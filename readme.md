<div align="center">
<img src="https://raw.githubusercontent.com/faridfr/react-personal-website/master/public/github/readme.png" width="800" alt="personal website for developers">
<h3>React.js personal website for developers</h3>
<h5>Do you want admin panel ? see <a href="https://github.com/faridfr/redwoodjs-personal-website">redwoodjs-personal-website</a> repository</h5>
</div>

<hr>

### Demo
[https://resume.faridfr.ir](https://resume.faridfr.ir)

### Installation

- Clone the project
- Copy `src/config-sample.json` to `src/config.json`
- Change `src/config.json` and set your website data
- `npm install` or `yarn`
- `npm start`

### Deploy on github.io ( Github Page ) :

- You need to install GitHub Pages package as a dev-dependency
```
cd react-personal-website
npm install gh-pages --save-dev
```

- Add properties to package.json file
> The first property we need to add at the top level homepage second we will define this as a string and the value will be "http://{username}.github.io/{repo-name}" {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created it will look like this :
`"homepage": "http://faridfr.github.io/react-personal-website"`

   Second in the existing scripts property we to need to add predeploy and deploy.
```
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```

- Create a Github repository and initialize it and add it as a remote in your local git repository
Now, create a remote GitHub repository with your app name and go back initialize this


- Now deploy it to GitHub Pages
just run the following command :
```
npm run deploy
```

> this command will create a branch named gh-pages this branch host your app, and homepage property you created in package.json file hold your link for a live preview

For enable SPA on github pages , read https://github.com/rafgraph/spa-github-pages
