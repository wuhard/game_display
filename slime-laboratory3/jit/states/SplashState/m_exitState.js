(function anonymous(context
) {
/*
	Index: 1047
	Path:  states/SplashState::m_exitState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_exitState(local1 /* Game */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::rootStage
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['rootStage'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgrootStage;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_BEGIN
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_BEGIN'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_BEGIN;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:states::_stageTouchHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[4]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeEventListener(stack1, stack2);
        } else {
            // 7 0::removeEventListener
            {
                let t = stack0;
                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::rootStage
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['rootStage'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgrootStage;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_MOVE
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_MOVE'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_MOVE;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[6]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:states::_stageTouchHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[4]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeEventListener(stack1, stack2);
        } else {
            // 7 0::removeEventListener
            {
                let t = stack0;
                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::rootStage
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['rootStage'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgrootStage;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_END
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_END'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_END;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[7]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:states::_stageTouchHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[4]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeEventListener(stack1, stack2);
        } else {
            // 7 0::removeEventListener
            {
                let t = stack0;
                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:states:SplashState::container
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
        stack0 = this.$Bgcontainer;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 1:states:SplashState::soundHudPanel
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::SoundHudPanel  */ 
        stack1 = this.$BgsoundHudPanel;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeChild(stack1);
        } else {
            // 7 0::removeChild
            {
                let t = stack0;
                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[8], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:states:SplashState::soundHudPanel
        //Possible type:7 0:flash.display::Sprite
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::SoundHudPanel  */ 
        stack0 = this.$BgsoundHudPanel;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.destroy();
        } else {
            // 7 0::destroy
            {
                let t = stack0;
                const m = t.$Bgdestroy || (t = sec.box(stack0), t.$Bgdestroy);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[9], [], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 1:states:SplashState::soundHudPanel
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces.panels::SoundHudPanel  */ 
        this.$BgsoundHudPanel = null;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::splashButtons
        //Possible type:7 0:interfaces.panels::SoundHudPanel
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::MenuButtonsSprite  */ 
        stack0 = this.$BgsplashButtons;
        // 7 0::playButton
        //Possible type:7 0::MenuButtonsSprite
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['playButton'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgplayButton;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
            }
        }
        // 7 0:flash.events::MouseEvent
        temp = scope0.findScopeProperty($names[11], true, false);
        stack1 = temp.$BgMouseEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[11]);
        }
        // 7 0::CLICK
        //Possible type:7 0:flash.events::MouseEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['CLICK'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgCLICK;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[12]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 1:states:SplashState::onClick
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[13]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeEventListener(stack1, stack2);
        } else {
            // 7 0::removeEventListener
            {
                let t = stack0;
                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::splashHud
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashHudSprite  */ 
        stack0 = this.$BgsplashHud;
        // 7 0::settingsButton
        //Possible type:7 0::SplashHudSprite
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['settingsButton'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgsettingsButton;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[14]);
            }
        }
        // 7 0:flash.events::MouseEvent
        temp = scope0.findScopeProperty($names[11], true, false);
        stack1 = temp.$BgMouseEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[11]);
        }
        // 7 0::CLICK
        //Possible type:7 0:flash.events::MouseEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['CLICK'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgCLICK;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[12]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 1:states:SplashState::hudHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[15]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeEventListener(stack1, stack2);
        } else {
            // 7 0::removeEventListener
            {
                let t = stack0;
                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::stateMachine
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
        stack0 = this.$BgstateMachine;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.destroy();
        } else {
            // 7 0::destroy
            {
                let t = stack0;
                const m = t.$Bgdestroy || (t = sec.box(stack0), t.$Bgdestroy);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[9], [], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0::stateMachine
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:game_utils::StateMachineNew  */ 
        this.$BgstateMachine = null;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:states:SplashState::container
        //Possible type:7 0:game_utils::StateMachineNew
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
        stack0 = this.$Bgcontainer;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::splashBackground
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::MenuBackground  */ 
        stack1 = this.$BgsplashBackground;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeChild(stack1);
        } else {
            // 7 0::removeChild
            {
                let t = stack0;
                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[8], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:states:SplashState::container
        //Possible type:7 0:flash.display::Sprite
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
        stack0 = this.$Bgcontainer;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::splashTitle
        //Possible type:7 0:interfaces.panels::MenuBackground
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
        stack1 = this.$BgsplashTitle;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeChild(stack1);
        } else {
            // 7 0::removeChild
            {
                let t = stack0;
                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[8], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::splashTitle
        //Possible type:7 0:flash.display::Sprite
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
        stack0 = this.$BgsplashTitle;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.destroy();
        } else {
            // 7 0::destroy
            {
                let t = stack0;
                const m = t.$Bgdestroy || (t = sec.box(stack0), t.$Bgdestroy);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[9], [], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0::splashBackground
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces.panels::MenuBackground  */ 
        this.$BgsplashBackground = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0::splashTitle
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces.panels::GameTitlePanel  */ 
        this.$BgsplashTitle = null;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::rootMovie
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['rootMovie'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgrootMovie;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[16]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 1:states:SplashState::container
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
        stack1 = this.$Bgcontainer;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeChild(stack1);
        } else {
            // 7 0::removeChild
            {
                let t = stack0;
                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[8], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 1:states:SplashState::container
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::Sprite  */ 
        this.$Bgcontainer = null;
//        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
        stack0 = local1;
        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
            local1.exitSplashState();
        } else {
            // 7 0::exitSplashState
            {
                let t = local1;
                const m = t.$BgexitSplashState || (t = sec.box(local1), t.$BgexitSplashState);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   local1.axCallProperty($names[17], [], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/states/SplashState/m_exitState.js
})