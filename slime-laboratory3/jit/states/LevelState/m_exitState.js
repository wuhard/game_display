(function anonymous(context
) {
/*
	Index: 975
	Path:  states/LevelState::m_exitState
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

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.exitLevel();
                        } else {
                            // 7 0::exitLevel
                            {
                                let t = stack0;
                                const m = t.$BgexitLevel || (t = sec.box(stack0), t.$BgexitLevel);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[0], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
                        // 7 0::visible
                        //Possible type:7 0::WhiteHudPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['visible'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgvisible;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 33; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack1 = this.$BgwhiteHudPanel;
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
                                   stack0.axCallProperty($names[2], [stack1], false);
                                }
                            }
                        }
                    case 33:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::WhiteHudPanel  */ 
                        this.$BgwhiteHudPanel = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::visible
                        //Possible type:7 0::PausePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['visible'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgvisible;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 57; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanelStaying
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgpausePanelStaying;
                        stack0 = !!stack0;
                    case 57:
                        if (!stack0) { p = 73; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack1 = this.$BgpausePanel;
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
                                   stack0.axCallProperty($names[2], [stack1], false);
                                }
                            }
                        }
                    case 73:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::PremiumPanel  */ 
                        this.$BgpremiumPanel = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::continueButton
                        //Possible type:7 0::PausePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['continueButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcontinueButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pausePanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[6]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::repeatLevelButton
                        //Possible type:7 0::PausePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['repeatLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrepeatLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pausePanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[6]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::backToTitleButton
                        //Possible type:7 0::PausePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['backToTitleButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgbackToTitleButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pausePanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[6]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::levelSelectionButton
                        //Possible type:7 0::PausePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelSelectionButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelSelectionButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pausePanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[6]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::PausePanel  */ 
                        this.$BgpausePanel = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_0
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_0'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_0;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_1
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_2
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_3
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_3'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_3;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_4
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_4'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_4;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_5
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_5'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_5;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_6
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_6'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_6;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_7
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_7'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_7;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_8
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_8'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_8;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_9
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_9'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_9;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_10
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_10'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_10;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_11
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_11'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_11;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[12]);
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
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::ShadesPanel  */ 
                        this.$BgglassesPanel = null;
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[24], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[24]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.instance();
                        } else {
                            // 7 0::instance
                            {
                                let t = stack0;
                                const m = t.$Bginstance || (t = sec.box(stack0), t.$Bginstance);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bginstance ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[25], [], false);
                                }
                            }
                        }
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::callBackRewardedBreak
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.callBackRewardedBreak = null;
                        } else {
                            context.setproperty($names[26], null, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[27], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[27]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[28]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BghudContainer;
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
                                   stack0.axCallProperty($names[2], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BghudContainer = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = null;
//                        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.exitLevelState();
                        } else {
                            // 7 0::exitLevelState
                            {
                                let t = local1;
                                const m = t.$BgexitLevelState || (t = sec.box(local1), t.$BgexitLevelState);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local1.axCallProperty($names[29], [], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/LevelState/m_exitState.js
})