/*!
NoPeek
Protect your online content from being copied or grabbed
https://github.com/de127/nopeek
By @DE127
MIT License
*/
"use strict";
const nopeek = ( function () {
    "use strict";
    /**
     * NoPeek
     * @return {{init: init}}
     * @private
     */
    function _nopeek() {
        /**
         * Init NoPeek
         * @param options
         */
        function init( options ) {

            const {
                selectAll,
                copy,
                cut,
                paste,
                save,
                viewSource,
                printPage,
                developerTool,
                windowBlur,
                tabHidden,
                readerMode,
                rightClick,
                rightClickImage,
                textSelection,
                imageDragging
            } = options;

            /** Disable Select All. */
            if ( selectAll === 'on' ) { disable_select_all(); }
            
            /** Disable Copy. */
            if ( copy === 'on' ) { disable_copy(); }
            
            /** Disable Cut. */
            if ( cut === 'true' ) { disable_cut(); }
            
            /** Disable Paste. */
            if ( paste === 'on' ) { disable_paste(); }
            
            /** Disable Save. */
            if ( save === 'on' ) { disable_save(); }
            
            /** Disable View Source. */
            if ( viewSource === 'on' ) { disable_view_source(); }
            
            /** Disable Print Page. */
            if ( printPage === 'on' ) { disable_print_page(); }

            /** Disable some settings for Apple mobile devices */
            if ( ! isAppleMobile() ) {

                /** Disable Developer Tool. */
                if ( developerTool === 'on' ) { disable_developer_tool(); }

                /** Disable Window Blur */
                if ( windowBlur === 'on' ) { disable_window_blur(); }

                /** Disable Hidden Tab */
                if ( tabHidden === 'on' && windowBlur === 'off' ) { disable_tab_hidden(); }

            }

            /** Disable Reader Mode. */
            if ( readerMode === 'on' ) { disable_reader_mode(); }
            
            /** Disable Right Click. */
            if ( rightClick === 'on' ) { disable_right_click(); }

            /** Disable Right Click on Image */
            if ( rightClickImage === 'on' && rightClick === 'off' ) { disable_right_click_image(); }
            
            /** Disable Text Selection. */
            if ( textSelection === 'on' ) { disable_text_selection(); }
                         
            /** Disable Image Dragging by Mouse. */
            if ( imageDragging === 'on' ) { disable_image_dragging(); }
        
        }

        /**
         * Check is device is apple mobile - iPhone, iPad(no Pro)
         * @return {boolean}
         */
        function isAppleMobile() {

            const userAgent = window.navigator.userAgent.toLowerCase();
            // const safari = /safari/.test( userAgent );

            return /iphone|ipod|ipad/.test( userAgent );

        }
        
        /**
         * Disable Select All, HotKeys: Ctrl+A, ⌘+A.
         * Protect Your Text from Being Copied by Select All HotKeys.
         **/
        function disable_select_all() {
            
            disable_key( 65 ); // Ctrl+A, ⌘+A.
            
        }
        
        /**
         * Disable Copy, HotKeys: Ctrl+C, ⌘+C.
         * Protect Your Text from Being Copied by Copy HotKeys.
         **/
        function disable_copy() {
            
            disable_key( 67 ); // Ctrl+C, ⌘+C.
            
        }
        
        /**
         * Disable Cut, HotKeys: Ctrl+X, ⌘+X.
         * Protect Your Text from Being Copied by Cut HotKeys.
         **/
        function disable_cut() {
            
            disable_key( 88 ); // Ctrl+X, ⌘+X.
            
        }
        
        /**
         * Disable Paste, HotKeys: Ctrl+V, ⌘+V.
         * Disable Peaste HotKeys.
         **/
        function disable_paste() {
            
            disable_key( 86 ); // Ctrl+V, ⌘+V.
            
        }
        
        /**
         * Disable Save, HotKeys: Ctrl+S, ⌘+S.
         * Protect Your Text from Being Saved by Save HotKeys.
         **/
        function disable_save() {
            
            disable_key( 83 ); // Ctrl+S, ⌘+S.
            
        }
        
        /**
         * Disable View Source, HotKeys: Ctrl+U, ⌘+U.
         * Disable to View Source Code of Page by HotKeys.
         **/
        function disable_view_source() {
            
            disable_key( 85 ); // Ctrl+U, ⌘+U.
            
        }
        
        /**
         * Disable Print Page, HotKeys: Ctrl+P, ⌘+P.
         * Protect Your Page from Being Printed by HotKeys.
         **/
        function disable_print_page() {
            
            disable_key( 80 ); // Ctrl+P, ⌘+P.
            
        }

        /**
         * Disable Reader Mode in Safari, HotKeys: ⌘+Shift+P.
         * Protect Your Page from Being open in Reader mode
         **/
        function disable_reader_mode() {

            if ( navigator.userAgent.toLowerCase().includes( 'safari' ) && !navigator.userAgent.toLowerCase().includes( 'chrome' ) ) {

                window.addEventListener( 'keydown', function( e ) {

                    if ( ( e.ctrlKey || e.metaKey ) && e.shiftKey && e.keyCode === 82 ) {
                        e.preventDefault();
                    }

                } );

            }

        }
        
        /**
         * Disable Developer Tool, HotKeys: Ctrl+Shift+I, ⌘+⌥+I, F12
         * Disable to View Source Code of Page by Developer Tools.
         **/
        function disable_developer_tool() {

            hotkeys( 'command+option+j,command+option+i,command+shift+c,command+option+c,command+option+k,command+option+z,command+option+e,f12,ctrl+shift+i,ctrl+shift+j,ctrl+shift+c,ctrl+shift+k,ctrl+shift+e,shift+f7,shift+f5,shift+f9,shift+f12', function( event, handler ) {
                event.preventDefault();
            } );

            /** DevTools open on load */
            if ( window.devtools.isOpen ) { hideBody() }

            /** DevTools open by user actions */
            window.addEventListener( 'devtoolschange', event => {

                if ( event.detail.isOpen ) { hideBody() } // Open
                if ( ! event.detail.isOpen ) { showBody() } // Close

            } );

        }

        /**
         * Disable page content if window state set to blur and
         * enable page content if window state set to focus
         */
        function disable_window_blur() {

            window.addEventListener( 'blur', hideBody );
            window.addEventListener( 'focus', showBody );

        }

        /**
         * Disable page content if tab state set to hidden and
         * enable page content if tab state set to hidden
         */
        function disable_tab_hidden() {

            document.addEventListener( "visibilitychange", () => {

                document.hidden ?
                    hideBody() :
                    showBody();

            }, false);

        }
        
        /**
         * Disable Right Click, Context Menu by Mouse Right Click.
         * Protect Your Content from Being Copied by Context Menu.
         **/
        function disable_right_click() {
            
            document.oncontextmenu = function( e ) {

                const t = e || window.event;
                const n = t.target || t.srcElement;

                if ( n.nodeName !== 'A' ) {
                    return false;  
                }
                
            };
            
            document.body.oncontextmenu = function () {
                return false;
            };

            document.onmousedown = function ( e ) {
                if ( e.button === 2 ) {
                    return false;
                }
            };

            /** To block "Enable Right Click" extensions */
            let enableRightClickExtensionsInterval = setInterval( function () {

                if ( null === document.oncontextmenu ) {
                    document.body.parentNode.removeChild( document.body );
                    document.head.parentNode.removeChild( document.head );

                    clearInterval( enableRightClickExtensionsInterval );
                }

            }, 500 )
            
        }

        /**
         * Disable Right Click on Image, Context Menu by Mouse Right Click.
         * Protect Your Image from Being Copied by Context Menu.
         */
        function disable_right_click_image() {

            document.oncontextmenu = function( e ) {

                const t = e || window.event;
                const n = t.target || t.srcElement;

                if ( 'IMG' === n.nodeName ) {
                    return false;
                }

            };

        }
        
        /**
         * Disable Text Selection.
         * Disable Text Highlight (Text Selection) by Mouse.
         **/
        function disable_text_selection() {
            
            if ( typeof document.body.onselectstart !== 'undefined' ) {
                document.body.onselectstart = function(){ return false; };
            } else if ( typeof document.body.style.MozUserSelect !== 'undefined' ) {
                document.body.style.MozUserSelect = 'none';
            } else if ( typeof document.body.style.webkitUserSelect !== 'undefined' ) {
                document.body.style.webkitUserSelect = 'none';
            } else {
                document.body.onmousedown = function() { return false; };
            }

            document.body.style.cursor = 'default';

            document.documentElement.style.webkitTouchCallout = "none";
            document.documentElement.style.webkitUserSelect = "none";

            /** Add css layer protection. */
            let css = document.createElement( 'style' );
            document.head.appendChild( css );
            css.type = 'text/css';
            css.innerText = "* {" +
                "-moz-user-select: none !important; " +
                "-ms-user-select: none !important; " +
                "user-select: none !important; " +
                "}";
            
        }
        
        /**
         * Disable Image Dragging by Mouse.
         **/
        function disable_image_dragging() {
            
            document.ondragstart = function() { return false; };
            
        }
         
        /**
         * Disable CTRL|CMD + Key by key Code.
         *
         * @param {number} code
         **/
        function disable_key( code ) {

            window.addEventListener( 'keydown', function( e ) {
                
                /** For Windows Check CTRL. */
                if ( e.ctrlKey && e.which === code ) { e.preventDefault(); }
                
                /** For Mac Check Metakey. */
                if ( e.metaKey && e.which === code ) { e.preventDefault(); }
                
            } );
            
            document.keypress = function( e ) {
                
                /** For Windows Check CTRL. */
                if ( e.ctrlKey && e.which === code ) { return false; }
                
                /** For Mac Check Metakey. */
                if ( e.metaKey && e.which === code ) { return false; }
                
            };
            
        }

        /**
         * Hide body to window object
         */
        function hideBody() {

            if ( document.body.innerHTML === '' ) { return }

            window.mdpNoPeekBody = document.body.innerHTML;
            document.body.innerHTML = '';

        }

        /**
         * Show body from window object
         */
        function showBody() {

            if ( window.mdpNoPeekBody === undefined || window.mdpNoPeekBody.length === 0 ) { return } // Exit if no body in window object

            setTimeout( (  ) => {

                const { mdpNoPeek } = window;
                const { developerTool } = mdpNoPeek;

                if ( developerTool === 'on' && window.devtools.isOpen ) { return } // Don't show body if devtools enabled and open

                document.body.innerHTML = window.mdpNoPeekBody;
                window.mdpNoPeekBody = '';

            }, 1 );

        }

        return {
            init: init
        };
        
    }
    
    return _nopeek;
    
} )();

document.addEventListener( 'DOMContentLoaded', function () {
    
    /** Disable plugin if page have [disable_NoPeek] Shortcode. */
    if ( typeof( mdpNoPeekDestroyer ) !== 'undefined' ) { return; }
    
    let NoPeek = new nopeek();
    NoPeek.init( window.mdpNoPeek );
    
});