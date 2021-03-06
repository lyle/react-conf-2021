## 1) Starting Up the Project

In the MacOS finder I made a folder called ReactConf-Lyle.

> When I ran react-create (next step) - I got an error about the name having upper case. So in finder I changed the name to react-conf-2021-lyle

I then Dropped the folder onto [Visual Studio Code](https://code.visualstudio.com/download)

In Visual Studio Code I used `Ctrl+~` to open the terminal drawer at the bottom and then ran these commands.

I like to have my git repo started first off.

```bash
git init
```

Create a TypeScript React App

```bash
npx create-react-app . --template typescript
```

Learn more about [create-react-app](https://create-react-app.dev/).

> While this was running Visual Studio Code brought up a message about how git was having trouble keeping up and suggested that we add `/node_modules` to the project's [.gitignore](.gitignore) file. - I just said yes to this dialog.

I decided that documenting things would be good so I made this file, and moved the react-create generated README.md file to be `react-create-README.md` - and then made a README.md for this project.

create-react-app has a great return message... I went ahead and made a folder for keeping screenshots and [here is an image of what I got back](./change_log_images/after-create-react-app-vscode-screenshot.png)

I then made the first commit by running these two commands:

```
git add .
git commit -m "Initial Commit with React Create"
```

## 2) Add a File Drop Area

- Made an UploadArea component, and a utility for said.
- Pulled the react logo
- put some styling in the main css file - not happy with this - clean it up later?

## 3) Add the Canvas

- Create an ImageCanvas Component that renders the image
- Provide a toggle for Cover and Fit of the image

## 4) Start the On Paste handling

- Create a PasteMessage Component
- Add an event listener for `onpaste`
- Add a "button" for using `navigator.clipboard`
- Ensure we always use HTTPS
- Small main page layout cleanup

## 5) Add Links

- In the talk I mention a bunch of things - it seems like having these things all in one place would be useful.
- Add React Conf and logo to the app
