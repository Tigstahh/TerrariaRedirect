chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    if (details.url.startsWith("https://terraria.fandom.com/")) {
      const newUrl = details.url.replace(
        "https://terraria.fandom.com/",
        "https://terraria.wiki.gg/"
      );
      chrome.tabs.update(details.tabId, { url: newUrl });
    }
    if (details.url.startsWith("https://thoriummod.fandom.com/")) {
      const newUrl = details.url.replace(
        "https://thoriummod.fandom.com/",
        "https://thoriummod.wiki.gg/"
      );
      chrome.tabs.update(details.tabId, { url: newUrl });
    }
  });
  