function switch_theme_rules(theme) {
    for (let sheet_file = 0; sheet_file < document.styleSheets.length; sheet_file++) {
        if (document.styleSheets[sheet_file].href && document.styleSheets[sheet_file].href.includes("/hanubeki-") && !(document.styleSheets[sheet_file].href.includes("-lt/") || document.styleSheets[sheet_file].href.includes("-dk/"))) {
            try {
                for (let sheet_rule = 0; sheet_rule < document.styleSheets[sheet_file].cssRules.length; sheet_rule++) {
                    const rule = document.styleSheets[sheet_file].cssRules[sheet_rule];

                    if (rule && rule.media && rule.media.mediaText.includes("prefers-color-scheme")) {
                        const rule_media = rule.media.mediaText;
                        let new_rule_media = rule.media.mediaText;

                        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                            if (theme == "dark") {
                                new_rule_media = rule_media.replace("light", "dark");
                            }

                            if (theme == "light") {
                                new_rule_media = rule_media.replace("dark", "light");
                            }
                        } else {
                            if (theme == "dark") {
                                new_rule_media = rule_media.replace("dark", "light");
                            }

                            if (theme == "light") {
                                new_rule_media = rule_media.replace("light", "dark");
                            }
                        }

                        rule.media.deleteMedium(rule_media);
                        rule.media.appendMedium(new_rule_media);
                    }
                }
            }
            catch (e) {
                const broken_sheet = document.styleSheets[sheet_file].href;
                console.warn(broken_sheet + " broke something with theme toggle : " + e);
            }
        }
    }
}

const hltThemeToggle = function () {
    if (document.querySelector(":root").getAttribute("data-bs-theme") === "dark") {
        switch_theme_rules("dark");
    } else {
        switch_theme_rules("light");
    }
}

const observer = new MutationObserver(function (mutations) {
    mutations.forEach(mutation => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-bs-theme") {
            hltThemeToggle();
        }
    });
});

observer.observe(document.querySelector(":root"), {attributes: true});

const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

prefersColorScheme.addEventListener("change", e => {hltThemeToggle()});

hltThemeToggle();
