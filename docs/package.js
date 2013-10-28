(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "version": "0.1.0",
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "grid-gen\n========\n\nGenerate a grid image programatically.\n",
      "type": "blob"
    },
    "grid.coffee.md": {
      "path": "grid.coffee.md",
      "mode": "100644",
      "content": "Grid Generator\n==============\n\n    Grid = ({width, height, guide, color}={}) ->\n      color ?= \"rgba(0, 0, 0, 0.3)\"\n      height ?= 32\n      width ?= 32\n      guide ?= 4\n\n      canvasWidth = width * guide\n      canvasHeight = height * guide\n\n      canvas = document.createElement(\"canvas\")\n      canvas.width = canvasWidth\n      canvas.height = canvasHeight\n\n      context = canvas.getContext(\"2d\")\n\n      context.fillStyle = color\n\n      [0...guide].forEach (i) ->\n        context.fillRect(i * width, 0, 1, canvasHeight)\n        context.fillRect(0, i * height, canvasWidth, 1)\n    \n      # Draw the strong line\n      context.fillRect(0, 0, 1, canvasHeight)\n      context.fillRect(0, 0, canvasWidth, 1)\n    \n      backgroundImage: ->\n        \"url(#{this.toDataURL()})\"\n    \n      toDataURL: ->\n        canvas.toDataURL(\"image/png\")\n\n    module.exports = Grid\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\nentryPoint: \"grid\"\nremoteDependencies: [\n  \"http://strd6.github.io/require/v0.2.2.js\"\n]\n",
      "type": "blob"
    },
    "test/test.coffee": {
      "path": "test/test.coffee",
      "mode": "100644",
      "content": "Grid = require \"../grid\"\n\ndocument.body.style[\"background-image\"] = Grid().backgroundImage()\n",
      "type": "blob"
    }
  },
  "distribution": {
    "grid": {
      "path": "grid",
      "content": "(function() {\n  var Grid;\n\n  Grid = function(_arg) {\n    var canvas, canvasHeight, canvasWidth, color, context, guide, height, width, _i, _ref, _results;\n    _ref = _arg != null ? _arg : {}, width = _ref.width, height = _ref.height, guide = _ref.guide, color = _ref.color;\n    if (color == null) {\n      color = \"rgba(0, 0, 0, 0.3)\";\n    }\n    if (height == null) {\n      height = 32;\n    }\n    if (width == null) {\n      width = 32;\n    }\n    if (guide == null) {\n      guide = 4;\n    }\n    canvasWidth = width * guide;\n    canvasHeight = height * guide;\n    canvas = document.createElement(\"canvas\");\n    canvas.width = canvasWidth;\n    canvas.height = canvasHeight;\n    context = canvas.getContext(\"2d\");\n    context.fillStyle = color;\n    (function() {\n      _results = [];\n      for (var _i = 0; 0 <= guide ? _i < guide : _i > guide; 0 <= guide ? _i++ : _i--){ _results.push(_i); }\n      return _results;\n    }).apply(this).forEach(function(i) {\n      context.fillRect(i * width, 0, 1, canvasHeight);\n      return context.fillRect(0, i * height, canvasWidth, 1);\n    });\n    context.fillRect(0, 0, 1, canvasHeight);\n    context.fillRect(0, 0, canvasWidth, 1);\n    return {\n      backgroundImage: function() {\n        return \"url(\" + (this.toDataURL()) + \")\";\n      },\n      toDataURL: function() {\n        return canvas.toDataURL(\"image/png\");\n      }\n    };\n  };\n\n  module.exports = Grid;\n\n}).call(this);\n\n//# sourceURL=grid.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"entryPoint\":\"grid\",\"remoteDependencies\":[\"http://strd6.github.io/require/v0.2.2.js\"]};",
      "type": "blob"
    },
    "test/test": {
      "path": "test/test",
      "content": "(function() {\n  var Grid;\n\n  Grid = require(\"../grid\");\n\n  document.body.style[\"background-image\"] = Grid().backgroundImage();\n\n}).call(this);\n\n//# sourceURL=test/test.coffee",
      "type": "blob"
    }
  },
  "entryPoint": "grid",
  "dependencies": {},
  "remoteDependencies": [
    "http://strd6.github.io/require/v0.2.2.js"
  ],
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "repository": {
    "id": 13941148,
    "name": "grid-gen",
    "full_name": "STRd6/grid-gen",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://2.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/grid-gen",
    "description": "Generate a grid image programatically.",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/grid-gen",
    "forks_url": "https://api.github.com/repos/STRd6/grid-gen/forks",
    "keys_url": "https://api.github.com/repos/STRd6/grid-gen/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/grid-gen/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/grid-gen/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/grid-gen/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/grid-gen/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/grid-gen/events",
    "assignees_url": "https://api.github.com/repos/STRd6/grid-gen/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/grid-gen/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/grid-gen/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/grid-gen/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/grid-gen/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/grid-gen/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/grid-gen/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/grid-gen/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/grid-gen/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/grid-gen/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/grid-gen/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/grid-gen/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/grid-gen/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/grid-gen/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/grid-gen/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/grid-gen/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/grid-gen/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/grid-gen/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/grid-gen/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/grid-gen/merges",
    "archive_url": "https://api.github.com/repos/STRd6/grid-gen/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/grid-gen/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/grid-gen/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/grid-gen/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/grid-gen/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/grid-gen/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/grid-gen/labels{/name}",
    "releases_url": "https://api.github.com/repos/STRd6/grid-gen/releases{/id}",
    "created_at": "2013-10-28T23:06:21Z",
    "updated_at": "2013-10-28T23:06:22Z",
    "pushed_at": "2013-10-28T23:06:22Z",
    "git_url": "git://github.com/STRd6/grid-gen.git",
    "ssh_url": "git@github.com:STRd6/grid-gen.git",
    "clone_url": "https://github.com/STRd6/grid-gen.git",
    "svn_url": "https://github.com/STRd6/grid-gen",
    "homepage": null,
    "size": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "master_branch": "master",
    "default_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "branch": "master",
    "defaultBranch": "master"
  }
});