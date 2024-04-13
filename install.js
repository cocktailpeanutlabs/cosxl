module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: [
        "git clone https://huggingface.co/spaces/cocktailpeanut/cosxl app",
      ]
    }
  }, {
    method: "script.start",
    params: {
      uri: "torch.js",
      params: {
        path: "app",
        venv: "env",
        xformers: true
      }
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",
      path: "app",
      message: [
        "pip install gradio",
        "pip install -r requirements.txt",
      ]
    }
  }, {
    method: "fs.link",
    params: {
      venv: "app/env"
    }
  }, {
    method: "notify",
    params: {
      html: "Click the 'start' tab to get started!"
    }
  }]
}
