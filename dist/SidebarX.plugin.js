/**
 * @name SidebarX
 * @description Transforms Discord's sidebar with a multi-column grid, styled folders, and animated notification rings.
 * @author DiumStream
 * @source https://github.com/DiumStream/SidebarX
 * @version 1.0.0
 */

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":root {\n    --server-listing-width: 126px;\n    --sfx-ring-style: rainbow;\n    --sfx-ring-color: #a855f7;\n}\n\n.wrapper_ef3116 {\n    width: var(--server-listing-width);\n}\n\n.itemsContainer_ef3116 {\n    width: calc(var(--server-listing-width) + 6px);\n}\n\n.wrapper_ef3116 .scroller_ef3116 {\n    display: flex;\n    flex-flow: row wrap;\n    padding-left: 0;\n    align-content: flex-start;\n    justify-content: center;\n    gap: 12px !important;\n    padding-top: 4px !important; \n}\n\n.unreadMentionsIndicatorTop_ef3116 {\n    justify-self: center;\n}\n\n.guildSeparator__252b6 {\n    display: none;\n}\n\n.tree_ef3116 .stack_dbd263 {\n    display: flex !important;\n    flex-flow: row wrap !important;\n    justify-content: center !important;\n    gap: 12px !important;\n}\n\n.stack_dbd263 .listItem__650eb:not(.wrapper__48112 .listItem__650eb) {\n    width: initial;\n    padding: 1px;\n    margin: 2px;\n}\n\n.stack_dbd263 .wrapper__48112 .listItem__650eb {\n    width: initial;\n}\n\n.scroller_ef3116 > .listItem__650eb {\n    width: 100%;\n}\n\n.listItem-GuPuDH {\n    width: auto;\n    margin-left: 0;\n}\n\n.wrapper-21YSNc {\n    position: relative;\n    width: auto;\n}\n\n.itemsContainer_ef3116 .stack_dbd263 {\n    display: flex !important;\n    flex-direction: column !important;\n    flex-flow: row wrap !important;\n    align-items: flex-start !important;\n}\n\n.wrapper__67dba .stack_dbd263 {\n    display: initial !important;\n    flex-direction: initial !important;\n    flex-flow: initial !important;\n    align-items: initial !important;\n}\n\n.tutorialContainer__1f388 {\n    display: flex !important;\n    justify-content: center !important;\n    align-items: center;\n    width: 100%;\n    margin-bottom: -20px !important; \n    gap: 12px;\n    position: relative;\n    margin-top: 0 !important; \n    padding-bottom: 12px;\n}\n\n.tutorialContainer__1f388::after {\n    content: \"\";\n    position: absolute;\n    bottom: -6px;\n    left: 10%;\n    width: 80%;\n    height: 2px;\n    background-color: var(--background-modifier-accent, #42454a);\n    border-radius: 2px;\n}\n\n.tutorialContainer__1f388 > div:first-child {\n    margin: 0 !important;\n}\n\n.sbx-settings-btn {\n    width: 48px;\n    height: 48px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    margin: 0;\n}\n\n.sbx-btn-inner {\n    width: 48px;\n    height: 48px;\n    background-color: var(--background-primary) !important;\n    color: #dcddde !important; \n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\n}\n\n.sbx-btn-inner:hover {\n    background-color: #5865f2 !important;\n    color: #ffffff !important;\n    border-radius: 16px;\n}\n\n.sbx-btn-inner:active {\n    transform: scale(0.95);\n}\n\n.sbx-btn-inner.is-active {\n    background-color: #5865f2 !important;\n    color: #ffffff !important;\n    border-radius: 16px !important;\n    transform: scale(0.95) !important;\n}\n\n.tutorialContainer__1f388 .listItemWrapper__91816 {\n    width: 48px !important;\n    height: 48px !important;\n    position: relative;\n}\n\n.tutorialContainer__1f388 .listItemWrapper__91816 > div {\n    opacity: 0 !important;\n    position: relative;\n    z-index: 1; \n}\n\n.tutorialContainer__1f388 .listItemWrapper__91816::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--background-primary);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 127.14 96.36'%3E%3Cpath fill='%23dcddde' d='M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z'/%3E%3C/svg%3E\");\n    background-size: 55%;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 50%;\n    transition: all 0.2s ease;\n    z-index: 0;\n    pointer-events: none;\n}\n\n.tutorialContainer__1f388 .listItemWrapper__91816:hover::before,\n.tutorialContainer__1f388 .listItemWrapper__91816[class*=\"selected\"]::before {\n    background-color: #5865f2;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 127.14 96.36'%3E%3Cpath fill='%23ffffff' d='M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z'/%3E%3C/svg%3E\");\n    border-radius: 16px;\n}\n\n@property --pill-angle {\n    syntax: \"<angle>\";\n    initial-value: 0deg;\n    inherits: false;\n}\n\n@keyframes pill-rotate {\n    to { --pill-angle: 360deg; }\n}\n\n@keyframes pill-glow {\n    0%, 100% {\n        opacity: 0.85;\n        filter: drop-shadow(0 0 3px var(--sfx-ring-color));\n    }\n    50% {\n        opacity: 1;\n        filter: drop-shadow(0 0 9px var(--sfx-ring-color));\n    }\n}\n\n@keyframes neon-pulse {\n    0%, 100% {\n        filter: drop-shadow(0 0 2px var(--sfx-ring-color)) brightness(1);\n    }\n    50% {\n        filter: drop-shadow(0 0 8px var(--sfx-ring-color)) brightness(1.3);\n    }\n}\n\n.wrapper__58105 {\n    overflow: visible !important;\n}\n\n.wrapper__58105.overlay__58105 {\n    width: 100% !important;\n}\n\n.overlay__58105 {\n    top: initial !important;\n}\n\n.item__58105 {\n    border: none !important;\n    background: transparent !important;\n    display: block;\n    position: absolute;\n    transform: none !important;\n    inset: 0 !important;\n    top: -2px !important;\n    left: 4px !important;\n    width: 100%;\n    height: 100% !important;\n    pointer-events: none;\n}\n\n.item__58105::after {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    border-radius: 32%;\n    -webkit-mask:\n        linear-gradient(#000 0 0) content-box,\n        linear-gradient(#000 0 0);\n    mask:\n        linear-gradient(#000 0 0) content-box,\n        linear-gradient(#000 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n}\n\n#guild-list-unread-dms .item__58105,\n.item__58105.hovered__58105,\n.item__58105.selected__58105,\n.tutorialContainer__1f388 .item__58105 {\n    display: none !important;\n}\n\n#guild-list-unread-dms .pill_ed9a5f {\n    display: none;\n}\n\n.folderGroup__48112 {\n    width: 54px !important;\n}\n\n.folderGroup__48112:not(.isExpanded__48112) .listItem__650eb .pill_e5445c.wrapper__58105 .item__58105 {\n    margin-left: -3px !important;\n    width: 48px !important;\n}\n\n.stack_dbd263.folderGuildsList__48112 {\n    gap: 0 !important;\n}\n\n.folderGroupBackground__48112 {\n    left: 3px;\n}\n\n.wrapper__48112.isExpanded__48112 .stack_dbd263 {\n    height: fit-content !important;\n    display: flex !important;\n    flex-direction: column !important;\n    overflow: visible;\n}\n\n.wrapper__48112.isExpanded__48112 .listItem__650eb {\n    width: 100% !important;\n}\n\n.wrapper__48112.isExpanded__48112 .stack_dbd263 .listItem__650eb .pill_e5445c.wrapper__58105 .item__58105 {\n    width: 85% !important;\n    height: 100% !important;\n    left: 5px !important;\n    top: -2px !important;\n}\n\n.expandedFolderBackground__48112 {\n    left: 0;\n}");

/***/ },

/***/ "./src/changelogs.json"
/*!*****************************!*\
  !*** ./src/changelogs.json ***!
  \*****************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"version":"1.0.0","title":"SidebarX","en":{"subtitle":"Initial Release","blurb":"A complete redesign of the server sidebar with a grid layout and custom notification rings.","changes":[{"title":"New Features","type":"added","items":["Multi-column grid layout for a modern server list.","Animated rainbow and neon notification rings.","Custom settings button with an active state next to the Home button.","Custom Home icon styling matching the grid aesthetic.","Refined folder and server icon styling."]}]},"fr":{"subtitle":"Version Initiale","blurb":"Une refonte complète de la barre latérale avec une grille et des anneaux de notification personnalisés.","changes":[{"title":"Nouveautés","type":"added","items":["Disposition en grille multi-colonnes pour une liste de serveurs moderne.","Anneaux de notification animés (arc-en-ciel et néon).","Bouton de paramètres personnalisé avec état actif à côté du bouton Accueil.","Style d\'icône d\'Accueil personnalisé s\'accordant à l\'esthétique de la grille.","Amélioration du style des dossiers et des icônes de serveurs."]}]}}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarX)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _changelogs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changelogs.json */ "./src/changelogs.json");



class SidebarX {
    constructor(meta) {
        Object.assign(this, meta);
        this.api = new BdApi("SidebarX");
        
        this.defaultSettings = {
            ringStyle: "rainbow",
            ringColor: "#a855f7",
            ringSize: 2.5
        };
        
        this.observer = null;
    }

    start() {
        this.api.DOM.addStyle("SidebarX-style", _styles_css__WEBPACK_IMPORTED_MODULE_0__["default"]);
        this.applySettings();
        
        setTimeout(() => {
            this.injectSettingsButton();
            this.showChangelog();
            
            this.observer = new MutationObserver(() => {
                if (!document.querySelector('.sbx-settings-btn')) {
                    this.injectSettingsButton();
                }
            });
            this.observer.observe(document.body, { childList: true, subtree: true });
        }, 2000);
    }

    stop() {
        this.api.DOM.removeStyle("SidebarX-style");
        this.api.DOM.removeStyle("SidebarX-dynamic");
        if (this.observer) this.observer.disconnect();
        document.querySelectorAll('.sbx-settings-btn').forEach(el => el.remove());
    }

    getSettings() {
        return Object.assign({}, this.defaultSettings, this.api.Data.load("settings"));
    }

    saveSettings(settings) {
        this.api.Data.save("settings", settings);
    }

    getLang() {
        try {
            let locale = BdApi.Webpack.getStore("LocaleStore")?.locale || 
                         document.documentElement.lang || 
                         navigator.language || "en";
            return String(locale).toLowerCase().startsWith("fr") ? "fr" : "en";
        } catch(e) { 
            return "en"; 
        }
    }

    showChangelog() {
        const lastVersion = this.api.Data.load("lastVersion");
        const currentVersion = _changelogs_json__WEBPACK_IMPORTED_MODULE_1__.version;

        if (lastVersion !== currentVersion) {
            const lang = this.getLang();
            const text = _changelogs_json__WEBPACK_IMPORTED_MODULE_1__[lang] || _changelogs_json__WEBPACK_IMPORTED_MODULE_1__.en;

            this.api.UI.showChangelogModal({
                title: _changelogs_json__WEBPACK_IMPORTED_MODULE_1__.title,
                subtitle: text.subtitle,
                blurb: text.blurb,
                changes: text.changes
            });
            
            this.api.Data.save("lastVersion", currentVersion);
        }
    }

    applySettings() {
        const settings = this.getSettings();
        this.api.DOM.removeStyle("SidebarX-dynamic");

        let dynamicCss = "";

        if (settings.ringStyle === "rainbow") {
            dynamicCss = `
                .item__58105::after {
                    padding: ${settings.ringSize}px !important;
                    background: conic-gradient(from var(--pill-angle), #ff0055, #ffb800, #00ff88, #00c3ff, #a855f7, #ff0055) !important;
                    animation: pill-rotate 3s linear infinite, pill-glow 2s ease-in-out infinite !important;
                }
            `;
        } else {
            dynamicCss = `
                .item__58105::after {
                    padding: ${settings.ringSize}px !important;
                    background: ${settings.ringColor} !important;
                    animation: neon-pulse 1.5s ease-in-out infinite !important;
                    box-shadow: 0 0 6px ${settings.ringColor}, 0 0 12px ${settings.ringColor} !important;
                }
            `;
        }

        this.api.DOM.addStyle("SidebarX-dynamic", dynamicCss);
    }

    injectSettingsButton() {
        const homeContainer = document.querySelector('.tutorialContainer__1f388');
        if (!homeContainer) return;
        if (document.querySelector('.sbx-settings-btn')) return;

        const btnWrapper = document.createElement('div');
        btnWrapper.className = 'sbx-settings-btn';
        
        btnWrapper.innerHTML = `
            <div class="sbx-btn-inner">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.723 19.132 15.385 18.662 15.959L20.251 17.548L17.548 20.251L15.959 18.662C15.385 19.132 14.723 19.498 14 19.739V22H10V19.738C9.277 19.498 8.615 19.132 8.041 18.662L6.452 20.251L3.749 17.548L5.338 15.959C4.868 15.385 4.502 14.723 4.262 14H2V10H4.262C4.502 9.277 4.868 8.615 5.338 8.041L3.749 6.452L6.452 3.749L8.041 5.338C8.615 4.868 9.277 4.502 10 4.262V2H14V4.261C14.723 4.502 15.385 4.868 15.959 5.338L17.548 3.749L20.251 6.452L18.662 8.041C19.132 8.615 19.498 9.277 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
                </svg>
            </div>
        `;

        btnWrapper.addEventListener('click', () => {
            const panel = this.getSettingsPanel();
            if (!panel) return;

            const innerBtn = btnWrapper.querySelector('.sbx-btn-inner');
            
            if (innerBtn) innerBtn.classList.add('is-active');

            const removeActiveState = () => {
                if (innerBtn) innerBtn.classList.remove('is-active');
            };

            BdApi.UI.showConfirmationModal("SidebarX Settings", panel, {
                confirmText: "Close",
                cancelText: null,
                danger: false,
                onConfirm: removeActiveState,
                onCancel: removeActiveState
            });

            const modalObserver = new MutationObserver(() => {
                if (!document.querySelector('.bd-modal-root')) {
                    removeActiveState();
                    modalObserver.disconnect();
                }
            });
            setTimeout(() => modalObserver.observe(document.body, { childList: true, subtree: true }), 100);
        });

        homeContainer.appendChild(btnWrapper);
    }

    getSettingsPanel() {
        return this.api.UI.buildSettingsPanel({
            settings: [
                {
                    type: "dropdown",
                    id: "ringStyle",
                    name: "Animation Style",
                    note: "Choose how the ring animates around unread servers.",
                    value: this.getSettings().ringStyle,
                    options: [
                        { label: "Animated Rainbow", value: "rainbow" },
                        { label: "Neon (Custom Color)", value: "neon" }
                    ]
                },
                {
                    type: "color",
                    id: "ringColor",
                    name: "Ring Color (Neon Mode)",
                    note: "This color is only used if the style is set to 'Neon'.",
                    value: this.getSettings().ringColor
                },
                {
                    type: "slider",
                    id: "ringSize",
                    name: "Ring Thickness",
                    note: "Adjust the ring stroke thickness (in pixels).",
                    value: this.getSettings().ringSize,
                    min: 1,
                    max: 6,
                    markers: [1, 2, 3, 4, 5, 6],
                    units: "px",
                    inline: false
                }
            ],
            onChange: (category, id, value) => {
                const newSettings = this.getSettings();
                newSettings[id] = value;
                this.saveSettings(newSettings);
                this.applySettings();
            }
        });
    }
}
})();

module.exports = __webpack_exports__["default"];
/******/ })()
;