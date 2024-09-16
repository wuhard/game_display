(function anonymous(context
) {
/*
	Index: 967
	Path:  states/LevelState::m_updateState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateState(local1 /* Game */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local4 = NaN;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PauseOn
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PauseOn'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPauseOn;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 = !stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 35; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::GlassesOn
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['GlassesOn'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgGlassesOn;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack0 = !stack0;
                    case 35:
                        if (!stack0) { p = 46; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
                    case 46:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pause_counter
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgpause_counter;
                        stack1 = -1;
                        if (!(-1 < stack0)) { p = 98; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 1:states:LevelState::pause_counter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgpause_counter;
                        stack0 = (stack0 | 0) + 1;
                        local7 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pause_counter
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.pause_counter = local7;
                        } else {
                            context.setproperty($names[4], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pause_counter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgpause_counter;
                        stack1 = 20;
                        if (!(20 <= stack0)) { p = 98; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::AVOID_PAUSE_PANEL
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgAVOID_PAUSE_PANEL = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = -1;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pause_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgpause_counter = -1;
                    case 98:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PauseOn
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PauseOn'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPauseOn;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 119; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::FREEZE_FLAG
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['FREEZE_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgFREEZE_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 = !stack0;
                    case 119:
                        if (!stack0) { p = 353; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::AVOID_PAUSE_PANEL
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgAVOID_PAUSE_PANEL;
                        stack1 = false;
                        if (false != stack0) { p = 349; continue; };
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
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
                                    stack0 = stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gameplayStop();
                        } else {
                            // 7 0::gameplayStop
                            {
                                let t = stack0;
                                const m = t.$BggameplayStop || (t = sec.box(stack0), t.$BggameplayStop);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[8], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:com.poki::PokiFlashSDK
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::FREEZE_FLAG
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.FREEZE_FLAG = true;
                        } else {
                            context.setproperty($names[5], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.stopAllSprites();
                        } else {
                            // 7 0::stopAllSprites
                            {
                                let t = stack0;
                                const m = t.$BgstopAllSprites || (t = sec.box(stack0), t.$BgstopAllSprites);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[9], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deactive();
                        } else {
                            // 7 0::deactive
                            {
                                let t = stack0;
                                const m = t.$Bgdeactive || (t = sec.box(stack0), t.$Bgdeactive);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[10], [], false);
                                }
                            }
                        }
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[11]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.StopMusic();
                        } else {
                            // 7 0::StopMusic
                            {
                                let t = stack0;
                                const m = t.$BgStopMusic || (t = sec.box(stack0), t.$BgStopMusic);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0::SoundSystem
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack1 = this.$BgwhiteHudPanel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[14], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['WIDTH'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgWIDTH;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[15]);
                            }
                        }
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        // 7 0::width
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.width = stack1;
                        } else {
                            context.setproperty($names[16], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['HEIGHT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgHEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        // 7 0::height
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.height = stack1;
                        } else {
                            context.setproperty($names[18], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndPlay(1);
                        } else {
                            // 7 0::gotoAndPlay
                            {
                                let t = stack0;
                                const m = t.$BggotoAndPlay || (t = sec.box(stack0), t.$BggotoAndPlay);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[19], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack1 = this.$BgpausePanel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[14], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0::PausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[20]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['WIDTH'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgWIDTH;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[15]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack4 = this.$BgpausePanel;
                        // 7 0::width
                        //Possible type:7 0::PausePanel
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack3 -= stack4;
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 /= 2;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[21], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0::PausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack1 = this.$BgpausePanel;
                        // 7 0::height
                        //Possible type:7 0::PausePanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['height'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgheight;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack1 = -stack1;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
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
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BghudContainer;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['rootMovie'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgrootMovie;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0::numChildren
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['numChildren'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgnumChildren;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[24]);
                            }
                        }
                        stack2--;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setChildIndex(stack1, stack2);
                        } else {
                            // 7 0::setChildIndex
                            {
                                let t = stack0;
                                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[25], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::pausePanelEntering
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpausePanelEntering = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 3;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::PAUSE_PANEL_JOYPAD_KEY
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgPAUSE_PANEL_JOYPAD_KEY = 3;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdateKeypadAreaPosition();
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[11]);
                        }
//                        stack1 = "select";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlaySound("select");
                        } else {
                            // 7 0::PlaySound
                            {
                                let t = stack0;
                                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                                if( typeof m === "function" ) { 
                                    m.call(t, "select");
                                } else { 
                                   stack0.axCallProperty($names[26], ["select"], false);
                                }
                            }
                        }
                    case 349:
                        { p = 1512; continue; };
                    case 353:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::GlassesOn
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['GlassesOn'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgGlassesOn;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 374; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::FREEZE_FLAG
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['FREEZE_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgFREEZE_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 = !stack0;
                    case 374:
                        if (!stack0) { p = 597; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::AVOID_PAUSE_PANEL
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgAVOID_PAUSE_PANEL;
                        stack1 = false;
                        if (false != stack0) { p = 593; continue; };
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
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
                                    stack0 = stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gameplayStop();
                        } else {
                            // 7 0::gameplayStop
                            {
                                let t = stack0;
                                const m = t.$BggameplayStop || (t = sec.box(stack0), t.$BggameplayStop);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[8], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:com.poki::PokiFlashSDK
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::FREEZE_FLAG
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.FREEZE_FLAG = true;
                        } else {
                            context.setproperty($names[5], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.stopAllSprites();
                        } else {
                            // 7 0::stopAllSprites
                            {
                                let t = stack0;
                                const m = t.$BgstopAllSprites || (t = sec.box(stack0), t.$BgstopAllSprites);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[9], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deactive();
                        } else {
                            // 7 0::deactive
                            {
                                let t = stack0;
                                const m = t.$Bgdeactive || (t = sec.box(stack0), t.$Bgdeactive);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[10], [], false);
                                }
                            }
                        }
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[11]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.StopMusic();
                        } else {
                            // 7 0::StopMusic
                            {
                                let t = stack0;
                                const m = t.$BgStopMusic || (t = sec.box(stack0), t.$BgStopMusic);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0::SoundSystem
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack1 = this.$BgwhiteHudPanel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[14], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['WIDTH'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgWIDTH;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[15]);
                            }
                        }
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        // 7 0::width
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.width = stack1;
                        } else {
                            context.setproperty($names[16], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['HEIGHT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgHEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        // 7 0::height
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.height = stack1;
                        } else {
                            context.setproperty($names[18], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndPlay(1);
                        } else {
                            // 7 0::gotoAndPlay
                            {
                                let t = stack0;
                                const m = t.$BggotoAndPlay || (t = sec.box(stack0), t.$BggotoAndPlay);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[19], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack1 = this.$BgglassesPanel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[14], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:7 0::ShadesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[20]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['WIDTH'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgWIDTH;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[15]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack4 = this.$BgglassesPanel;
                        // 7 0::width
                        //Possible type:7 0::ShadesPanel
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack3 -= stack4;
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 /= 2;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[21], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:7 0::ShadesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack1 = this.$BgglassesPanel;
                        // 7 0::height
                        //Possible type:7 0::ShadesPanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['height'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgheight;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack1 = -stack1;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
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
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BghudContainer;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['rootMovie'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgrootMovie;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0::numChildren
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['numChildren'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgnumChildren;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[24]);
                            }
                        }
                        stack2--;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setChildIndex(stack1, stack2);
                        } else {
                            // 7 0::setChildIndex
                            {
                                let t = stack0;
                                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[25], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanelEntering
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgglassesPanelEntering = true;
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[11]);
                        }
//                        stack1 = "select";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlaySound("select");
                        } else {
                            // 7 0::PlaySound
                            {
                                let t = stack0;
                                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                                if( typeof m === "function" ) { 
                                    m.call(t, "select");
                                } else { 
                                   stack0.axCallProperty($names[26], ["select"], false);
                                }
                            }
                        }
                    case 593:
                        { p = 1512; continue; };
                    case 597:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::AdsOn
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['AdsOn'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgAdsOn;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[27]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 618; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::FREEZE_FLAG
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['FREEZE_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgFREEZE_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 = !stack0;
                    case 618:
                        if (!stack0) { p = 676; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::AdsOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.AdsOn = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = stack0;
                        local6 = stack1;
                        // 7 0::AdsCounter
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['AdsCounter'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgAdsCounter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[28]);
                            }
                        }
                        stack0 = (stack0 | 0) + 1;
                        local7 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::AdsCounter
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.AdsCounter = local7;
                        } else {
                            context.setproperty($names[28], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::AdsCounter
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['AdsCounter'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgAdsCounter;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[28]);
                            }
                        }
                        stack1 = 3;
                        if (!(3 <= stack0)) { p = 672; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::AdsCounter
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.AdsCounter = 0;
                        } else {
                            context.setproperty($names[28], 0, stack0);
                        }
                    case 672:
                        { p = 1512; continue; };
                    case 676:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::LEVEL_WON_FLAG
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LEVEL_WON_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLEVEL_WON_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[29]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 698; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::FREEZE_FLAG
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['FREEZE_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgFREEZE_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 = !stack0;
                    case 698:
                        if (!stack0) { p = 1512; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::POPUP_LEVEL_COMPLETE_ONCE
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgPOPUP_LEVEL_COMPLETE_ONCE;
                        if (!stack0) { p = 1512; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::POPUP_LEVEL_COMPLETE_ONCE
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgPOPUP_LEVEL_COMPLETE_ONCE = false;
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
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
                                    stack0 = stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gameplayStop();
                        } else {
                            // 7 0::gameplayStop
                            {
                                let t = stack0;
                                const m = t.$BggameplayStop || (t = sec.box(stack0), t.$BggameplayStop);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[8], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:com.poki::PokiFlashSDK
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::FREEZE_FLAG
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.FREEZE_FLAG = true;
                        } else {
                            context.setproperty($names[5], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deactive();
                        } else {
                            // 7 0::deactive
                            {
                                let t = stack0;
                                const m = t.$Bgdeactive || (t = sec.box(stack0), t.$Bgdeactive);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[10], [], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['CurrentLevel'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgCurrentLevel;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[30]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::LAST_LEVEL
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['LAST_LEVEL'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgLAST_LEVEL;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[31]);
                            }
                        }
                        if (stack1 != stack0) { p = 778; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::levelEnd
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglevelEnd = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 5;// JIT: redundant assigment, value unused
                        // 7 0::choice
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgchoice = 5;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgtimeToSave(true);
                        { p = 1512; continue; };
                    case 778:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::FREEZE_FLAG
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.FREEZE_FLAG = true;
                        } else {
                            context.setproperty($names[5], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deactive();
                        } else {
                            // 7 0::deactive
                            {
                                let t = stack0;
                                const m = t.$Bgdeactive || (t = sec.box(stack0), t.$Bgdeactive);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[10], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack1 = this.$BgwhiteHudPanel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[14], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['WIDTH'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgWIDTH;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[15]);
                            }
                        }
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        // 7 0::width
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.width = stack1;
                        } else {
                            context.setproperty($names[16], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['HEIGHT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgHEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        // 7 0::height
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.height = stack1;
                        } else {
                            context.setproperty($names[18], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndPlay(1);
                        } else {
                            // 7 0::gotoAndPlay
                            {
                                let t = stack0;
                                const m = t.$BggotoAndPlay || (t = sec.box(stack0), t.$BggotoAndPlay);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[19], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgisPossibleToUnlockNewSkins();
                        stack0 = !stack0;
                        stack1 = stack0;
                        if (stack1) { p = 875; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::ADS_BLOCKED
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['ADS_BLOCKED'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgADS_BLOCKED;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[32]);
                            }
                        }
                        stack0 = !!stack0;
                    case 875:
                        stack1 = stack0;
                        if (stack1) { p = 887; continue; };
                        // 7 0::RANDOM_SKIN_COUNTER
                        temp = scope0.findScopeProperty($names[33], true, false);
                        stack0 = temp.$BgRANDOM_SKIN_COUNTER;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[33]);
                        }
                        stack1 = 1;
                        stack0 = stack0 >= 1;
                    case 887:
                        stack1 = stack0;
                        if (stack1) { p = 900; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::SKIP_LEVEL_REWARD
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['SKIP_LEVEL_REWARD'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgSKIP_LEVEL_REWARD;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[34]);
                            }
                        }
                        stack0 = !!stack0;
                    case 900:
                        if (!stack0) { p = 1001; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::LEVEL_WON
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgLEVEL_WON;
                        stack1 = false;
                        if (false != stack0) { p = 953; continue; };
                        // 7 0::RANDOM_SKIN_COUNTER
                        stack0 = scope0.findScopeProperty($names[33], true, false);
                        stack1 = stack0;
                        local6 = stack1;
                        // 7 0::RANDOM_SKIN_COUNTER
                        //Possible type:7 0::Boolean
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['RANDOM_SKIN_COUNTER'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgRANDOM_SKIN_COUNTER;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[33]);
                            }
                        }
                        stack0 = (stack0 | 0) + 1;
                        local7 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::RANDOM_SKIN_COUNTER
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.RANDOM_SKIN_COUNTER = local7;
                        } else {
                            context.setproperty($names[33], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::RANDOM_SKIN_COUNTER
                        temp = scope0.findScopeProperty($names[33], true, false);
                        stack0 = temp.$BgRANDOM_SKIN_COUNTER;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[33]);
                        }
                        stack1 = 3;
                        if (!(3 <= stack0)) { p = 953; continue; };
                        // 7 0::RANDOM_SKIN_COUNTER
                        stack0 = scope0.findScopeProperty($names[33], false, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::RANDOM_SKIN_COUNTER
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.RANDOM_SKIN_COUNTER = 0;
                        } else {
                            context.setproperty($names[33], 0, stack0);
                        }
                    case 953:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::LEVEL_WON
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgLEVEL_WON = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::LevelCompletePanel
                        stack1 = scope0.findScopeProperty($names[35], true, false);
                        stack1 = context.constructprop($names[35], stack1, []);
                        // 7 0::levelCompletePanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BglevelCompletePanel = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::IS_SKINS_PANEL
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_SKINS_PANEL = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0::RANDOM_SKIN_COUNTER
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::PERFECT_LEVEL_FLAG
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PERFECT_LEVEL_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPERFECT_LEVEL_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[36]);
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 997; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::perfect
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['perfect'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgperfect;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[37]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[38], false, stack0);
                        }
                    case 997:
                        { p = 1119; continue; };
                    case 1001:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::PremiumPanel
                        stack1 = scope0.findScopeProperty($names[39], true, false);
                        stack1 = context.constructprop($names[39], stack1, []);
                        // 7 0::levelCompletePanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BglevelCompletePanel = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::yesButton
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['yesButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgyesButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[40]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[41], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[41]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[42]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::costumePanelClickHandler
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[43]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[44], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::noButton
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['noButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgnoButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[45]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[41], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[41]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[42]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::costumePanelClickHandler
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[43]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[44], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::IS_SKINS_PANEL
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_SKINS_PANEL = true;
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
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
                                    stack0 = stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::callBackRewardedBreak
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack1 = this.axGetProperty($names[46]);
                        // 7 0::callBackRewardedBreak
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.callBackRewardedBreak = stack1;
                        } else {
                            context.setproperty($names[46], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanelEntering
                        //Possible type:7 0:com.poki::PokiFlashSDK
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BglevelCompletePanelEntering;
                        stack1 = false;
                        if (false != stack0) { p = 1119; continue; };
                        // 7 0::RANDOM_SKIN_COUNTER
                        stack0 = scope0.findScopeProperty($names[33], true, false);
                        stack1 = stack0;
                        local6 = stack1;
                        // 7 0::RANDOM_SKIN_COUNTER
                        //Possible type:7 0::Boolean
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['RANDOM_SKIN_COUNTER'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgRANDOM_SKIN_COUNTER;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[33]);
                            }
                        }
                        stack0 = (stack0 | 0) + 1;
                        local7 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::RANDOM_SKIN_COUNTER
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.RANDOM_SKIN_COUNTER = local7;
                        } else {
                            context.setproperty($names[33], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::RANDOM_SKIN_COUNTER
                        temp = scope0.findScopeProperty($names[33], true, false);
                        stack0 = temp.$BgRANDOM_SKIN_COUNTER;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[33]);
                        }
                        stack1 = 3;
                        if (!(3 <= stack0)) { p = 1119; continue; };
                        // 7 0::RANDOM_SKIN_COUNTER
                        stack0 = scope0.findScopeProperty($names[33], false, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::RANDOM_SKIN_COUNTER
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.RANDOM_SKIN_COUNTER = 0;
                        } else {
                            context.setproperty($names[33], 0, stack0);
                        }
                    case 1119:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0::RANDOM_SKIN_COUNTER
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BglevelCompletePanel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[13], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[14], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[20]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['WIDTH'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgWIDTH;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[15]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack4 = this.$BglevelCompletePanel;
                        // 7 0::width
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack3 -= stack4;
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 /= 2;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[21], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::IS_SKINS_PANEL
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_SKINS_PANEL;
                        if (!stack0) { p = 1193; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BglevelCompletePanel;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack2 = 4;// JIT: redundant assigment, value unused
                        stack1 += 4;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[21], stack1, stack0);
                        }
                    case 1193:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BglevelCompletePanel;
                        // 7 0::height
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['height'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgheight;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack1 = -stack1;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanelEntering
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglevelCompletePanelEntering = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::IS_SKINS_PANEL
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_SKINS_PANEL;
                        if (stack0) { p = 1506; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PlayerItems
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PlayerItems'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPlayerItems;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[47]);
                            }
                        }
                        stack1 = 0;
                        stack0 >>= 0;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1304; continue; };
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[48], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[48]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[49]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[50]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::levelItems
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelItems'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelItems;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[51]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CurrentLevel'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCurrentLevel;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[30]);
                            }
                        }
                        stack1--;
                        // 27 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::*
                        {
                            let simple = stack1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[52], stack1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = 0;
                        stack0 >>= 0;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 1;
                        if (1 != stack0) { p = 1289; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::floppy_1
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['floppy_1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfloppy_1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[53]);
                            }
                        }
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.5;
                        } else {
                            context.setproperty($names[54], 0.5, stack0);
                        }
                        { p = 1300; continue; };
                    case 1289:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::floppy_1
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['floppy_1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfloppy_1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[53]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[38], false, stack0);
                        }
                    case 1300:
                        { p = 1316; continue; };
                    case 1304:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::floppy_1
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['floppy_1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfloppy_1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[53]);
                            }
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[54], 1, stack0);
                        }
                    case 1316:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PlayerItems
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PlayerItems'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPlayerItems;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[47]);
                            }
                        }
                        stack1 = 1;
                        stack0 >>= 1;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1399; continue; };
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[48], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[48]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[49]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[50]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::levelItems
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelItems'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelItems;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[51]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CurrentLevel'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCurrentLevel;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[30]);
                            }
                        }
                        stack1--;
                        // 27 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::*
                        {
                            let simple = stack1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[52], stack1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = 1;
                        stack0 >>= 1;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 1;
                        if (1 != stack0) { p = 1384; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::floppy_2
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['floppy_2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfloppy_2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[55]);
                            }
                        }
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.5;
                        } else {
                            context.setproperty($names[54], 0.5, stack0);
                        }
                        { p = 1395; continue; };
                    case 1384:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::floppy_2
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['floppy_2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfloppy_2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[55]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[38], false, stack0);
                        }
                    case 1395:
                        { p = 1411; continue; };
                    case 1399:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::floppy_2
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['floppy_2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfloppy_2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[55]);
                            }
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[54], 1, stack0);
                        }
                    case 1411:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PlayerItems
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PlayerItems'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPlayerItems;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[47]);
                            }
                        }
                        stack1 = 2;
                        stack0 >>= 2;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1494; continue; };
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[48], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[48]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[49]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[50]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::levelItems
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelItems'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelItems;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[51]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CurrentLevel'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCurrentLevel;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[30]);
                            }
                        }
                        stack1--;
                        // 27 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::*
                        {
                            let simple = stack1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[52], stack1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = 2;
                        stack0 >>= 2;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 1;
                        if (1 != stack0) { p = 1479; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::floppy_3
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['floppy_3'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfloppy_3;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[56]);
                            }
                        }
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.5;
                        } else {
                            context.setproperty($names[54], 0.5, stack0);
                        }
                        { p = 1490; continue; };
                    case 1479:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::floppy_3
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['floppy_3'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfloppy_3;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[56]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[38], false, stack0);
                        }
                    case 1490:
                        { p = 1506; continue; };
                    case 1494:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::floppy_3
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['floppy_3'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfloppy_3;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[56]);
                            }
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[54], 1, stack0);
                        }
                    case 1506:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgtimeToSave(false);
                    case 1512:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanelEntering
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgpausePanelEntering;
                        if (!stack0) { p = 1645; continue; };
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[20]);
                        }
                        stack1 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['HEIGHT'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgHEIGHT;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = 130;// JIT: redundant assigment, value unused
                        stack2 -= 130;
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        stack0 |= 0;
                        stack1 = stack0;
                        local5 = stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack1 = this.$BgpausePanel;
                        // 7 0::y
                        //Possible type:7 0::PausePanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack0 -= stack1;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 /= 2;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local4 = stack1;
                        stack1 = 12;
                        if (!(12 > stack0)) { p = 1568; continue; };
                        stack0 = 12;
                        stack0 = +12;
                        local4 = stack0;
                    case 1568:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack1 = this.$BgpausePanel;
                        // 7 0::y
                        //Possible type:7 0::PausePanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        stack1 += local4;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0::PausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::y
                        //Possible type:7 0::PausePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack1 = local5;
                        if (!(local5 <= stack0)) { p = 1636; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = local5;
                        } else {
                            context.setproperty($names[22], local5, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::pausePanelEntering
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpausePanelEntering = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::pausePanelStaying
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpausePanelStaying = true;
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
                                stack0 = temp.axGetProperty($names[57]);
                            }
                        }
                        // 7 0:flash.events::KeyboardEvent
                        temp = scope0.findScopeProperty($names[58], true, false);
                        stack1 = temp.$BgKeyboardEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[58]);
                        }
                        // 7 0::KEY_DOWN
                        //Possible type:7 0:flash.events::KeyboardEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['KEY_DOWN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgKEY_DOWN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[59]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::pauseKeyDownListener
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[60]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[61], [stack1, stack2], false);
                                }
                            }
                        }
                    case 1636:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdatePausePanelSin();
                        { p = 1884; continue; };
                    case 1645:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanelStaying
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgpausePanelStaying;
                        if (!stack0) { p = 1667; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdateKeypadAreaPosition();
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdatePausePanelSin();
                        { p = 1884; continue; };
                    case 1667:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanelExiting
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgpausePanelExiting;
                        if (!stack0) { p = 1884; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.play();
                        } else {
                            // 7 0::play
                            {
                                let t = stack0;
                                const m = t.$Bgplay || (t = sec.box(stack0), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[62], [], false);
                                }
                            }
                        }
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[20]);
                        }
                        stack1 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['HEIGHT'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgHEIGHT;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = 130;// JIT: redundant assigment, value unused
                        stack2 -= 130;
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack1 = this.$BgpausePanel;
                        // 7 0::y
                        //Possible type:7 0::PausePanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack0 -= stack1;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 /= 2;
                        stack0 = -stack0;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local4 = stack1;
                        stack1 = 32;
                        if (!(32 > stack0)) { p = 1728; continue; };
                        stack0 = 32;
                        stack0 = +32;
                        local4 = stack0;
                    case 1728:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack1 = this.$BgpausePanel;
                        // 7 0::y
                        //Possible type:7 0::PausePanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        stack1 += local4;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0::PausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::y
                        //Possible type:7 0::PausePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['HEIGHT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgHEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
                        if (!(stack1 <= stack0)) { p = 1879; continue; };
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
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
                                    stack0 = stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gameplayStart();
                        } else {
                            // 7 0::gameplayStart
                            {
                                let t = stack0;
                                const m = t.$BggameplayStart || (t = sec.box(stack0), t.$BggameplayStart);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[63], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0:com.poki::PokiFlashSDK
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['HEIGHT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgHEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::PausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[64], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[14], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:undefined
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
                                   stack0.axCallProperty($names[65], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0::WhiteHudPanel
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
                                   stack0.axCallProperty($names[65], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[14], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::pausePanelExiting
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpausePanelExiting = false;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::PauseOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PauseOn = false;
                        } else {
                            context.setproperty($names[1], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::FREEZE_FLAG
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.FREEZE_FLAG = false;
                        } else {
                            context.setproperty($names[5], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.playAllSprites();
                        } else {
                            // 7 0::playAllSprites
                            {
                                let t = stack0;
                                const m = t.$BgplayAllSprites || (t = sec.box(stack0), t.$BgplayAllSprites);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[66], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.playMusic();
                        } else {
                            // 7 0::playMusic
                            {
                                let t = stack0;
                                const m = t.$BgplayMusic || (t = sec.box(stack0), t.$BgplayMusic);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[67], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.resetFocus();
                        } else {
                            // 7 0::resetFocus
                            {
                                let t = stack0;
                                const m = t.$BgresetFocus || (t = sec.box(stack0), t.$BgresetFocus);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[68], [], false);
                                }
                            }
                        }
                    case 1879:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdatePausePanelSin();
                    case 1884:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanelEntering
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgglassesPanelEntering;
                        if (!stack0) { p = 1998; continue; };
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[20]);
                        }
                        stack1 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['HEIGHT'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgHEIGHT;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = 130;// JIT: redundant assigment, value unused
                        stack2 -= 130;
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        stack0 |= 0;
                        stack1 = stack0;
                        local5 = stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack1 = this.$BgglassesPanel;
                        // 7 0::y
                        //Possible type:7 0::ShadesPanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack0 -= stack1;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 /= 2;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local4 = stack1;
                        stack1 = 12;
                        if (!(12 > stack0)) { p = 1940; continue; };
                        stack0 = 12;
                        stack0 = +12;
                        local4 = stack0;
                    case 1940:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack1 = this.$BgglassesPanel;
                        // 7 0::y
                        //Possible type:7 0::ShadesPanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        stack1 += local4;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:7 0::ShadesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::y
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack1 = local5;
                        if (!(local5 <= stack0)) { p = 1989; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = local5;
                        } else {
                            context.setproperty($names[22], local5, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanelEntering
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgglassesPanelEntering = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanelStaying
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgglassesPanelStaying = true;
                    case 1989:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdateGlassesPanelSin();
                        { p = 2232; continue; };
                    case 1998:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanelStaying
                        //Possible type:7 0::ShadesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgglassesPanelStaying;
                        if (!stack0) { p = 2015; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdateGlassesPanelSin();
                        { p = 2232; continue; };
                    case 2015:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanelExiting
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgglassesPanelExiting;
                        if (!stack0) { p = 2232; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.play();
                        } else {
                            // 7 0::play
                            {
                                let t = stack0;
                                const m = t.$Bgplay || (t = sec.box(stack0), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[62], [], false);
                                }
                            }
                        }
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[20]);
                        }
                        stack1 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['HEIGHT'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgHEIGHT;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = 130;// JIT: redundant assigment, value unused
                        stack2 -= 130;
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack1 = this.$BgglassesPanel;
                        // 7 0::y
                        //Possible type:7 0::ShadesPanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack0 -= stack1;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 /= 2;
                        stack0 = -stack0;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local4 = stack1;
                        stack1 = 32;
                        if (!(32 > stack0)) { p = 2076; continue; };
                        stack0 = 32;
                        stack0 = +32;
                        local4 = stack0;
                    case 2076:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack1 = this.$BgglassesPanel;
                        // 7 0::y
                        //Possible type:7 0::ShadesPanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        stack1 += local4;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:7 0::ShadesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::y
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['HEIGHT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgHEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
                        if (!(stack1 <= stack0)) { p = 2227; continue; };
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
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
                                    stack0 = stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gameplayStart();
                        } else {
                            // 7 0::gameplayStart
                            {
                                let t = stack0;
                                const m = t.$BggameplayStart || (t = sec.box(stack0), t.$BggameplayStart);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[63], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:7 0:com.poki::PokiFlashSDK
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['HEIGHT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgHEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::ShadesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[64], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[14], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:undefined
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
                                   stack0.axCallProperty($names[65], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack1 = this.$BgglassesPanel;
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
                                   stack0.axCallProperty($names[65], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[14], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanelExiting
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgglassesPanelExiting = false;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::GlassesOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.GlassesOn = false;
                        } else {
                            context.setproperty($names[2], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::FREEZE_FLAG
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.FREEZE_FLAG = false;
                        } else {
                            context.setproperty($names[5], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.playAllSprites();
                        } else {
                            // 7 0::playAllSprites
                            {
                                let t = stack0;
                                const m = t.$BgplayAllSprites || (t = sec.box(stack0), t.$BgplayAllSprites);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[66], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.playMusic();
                        } else {
                            // 7 0::playMusic
                            {
                                let t = stack0;
                                const m = t.$BgplayMusic || (t = sec.box(stack0), t.$BgplayMusic);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[67], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.resetFocus();
                        } else {
                            // 7 0::resetFocus
                            {
                                let t = stack0;
                                const m = t.$BgresetFocus || (t = sec.box(stack0), t.$BgresetFocus);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[68], [], false);
                                }
                            }
                        }
                    case 2227:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdateGlassesPanelSin();
                    case 2232:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanelEntering
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgpremiumPanelEntering;
                        if (!stack0) { p = 2350; continue; };
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[20]);
                        }
                        stack1 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['HEIGHT'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgHEIGHT;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack3 = this.$BgpremiumPanel;
                        // 7 0::height
                        //Possible type:7 0::PremiumPanel
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['height'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgheight;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack2 -= stack3;
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        stack0 |= 0;
                        stack1 = stack0;
                        local5 = stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack1 = this.$BgpremiumPanel;
                        // 7 0::y
                        //Possible type:7 0::PremiumPanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack0 -= stack1;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 /= 2;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local4 = stack1;
                        stack1 = 12;
                        if (!(12 > stack0)) { p = 2292; continue; };
                        stack0 = 12;
                        stack0 = +12;
                        local4 = stack0;
                    case 2292:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack1 = this.$BgpremiumPanel;
                        // 7 0::y
                        //Possible type:7 0::PremiumPanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        stack1 += local4;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:7 0::PremiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::y
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack1 = local5;
                        if (!(local5 <= stack0)) { p = 2341; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = local5;
                        } else {
                            context.setproperty($names[22], local5, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanelEntering
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpremiumPanelEntering = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanelStaying
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpremiumPanelStaying = true;
                    case 2341:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdatePremiumPanelSin();
                        { p = 2562; continue; };
                    case 2350:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanelStaying
                        //Possible type:7 0::PremiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgpremiumPanelStaying;
                        if (!stack0) { p = 2367; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdatePremiumPanelSin();
                        { p = 2562; continue; };
                    case 2367:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanelExiting
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgpremiumPanelExiting;
                        if (!stack0) { p = 2562; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.play();
                        } else {
                            // 7 0::play
                            {
                                let t = stack0;
                                const m = t.$Bgplay || (t = sec.box(stack0), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[62], [], false);
                                }
                            }
                        }
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[20]);
                        }
                        stack1 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['HEIGHT'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgHEIGHT;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack3 = this.$BgpremiumPanel;
                        // 7 0::height
                        //Possible type:7 0::PremiumPanel
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['height'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgheight;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack2 -= stack3;
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack1 = this.$BgpremiumPanel;
                        // 7 0::y
                        //Possible type:7 0::PremiumPanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack0 -= stack1;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 /= 2;
                        stack0 = -stack0;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local4 = stack1;
                        stack1 = 32;
                        if (!(32 > stack0)) { p = 2432; continue; };
                        stack0 = 32;
                        stack0 = +32;
                        local4 = stack0;
                    case 2432:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack1 = this.$BgpremiumPanel;
                        // 7 0::y
                        //Possible type:7 0::PremiumPanel
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        stack1 += local4;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:7 0::PremiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::y
                        //Possible type:7 0::PremiumPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['HEIGHT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgHEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
                        if (!(stack1 <= stack0)) { p = 2557; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['HEIGHT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgHEIGHT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::PremiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[64], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[14], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:undefined
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
                                   stack0.axCallProperty($names[65], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack1 = this.$BgpremiumPanel;
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
                                   stack0.axCallProperty($names[65], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[14], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanelExiting
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpremiumPanelExiting = false;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::AdsOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.AdsOn = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::FREEZE_FLAG
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.FREEZE_FLAG = false;
                        } else {
                            context.setproperty($names[5], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.resetFocus();
                        } else {
                            // 7 0::resetFocus
                            {
                                let t = stack0;
                                const m = t.$BgresetFocus || (t = sec.box(stack0), t.$BgresetFocus);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[68], [], false);
                                }
                            }
                        }
                    case 2557:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdatePremiumPanelSin();
                    case 2562:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanelEntering
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BglevelCompletePanelEntering;
                        if (!stack0) { p = 2767; continue; };
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
                                stack0 = temp.axGetProperty($names[23]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BghudContainer;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['rootMovie'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgrootMovie;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[23]);
                            }
                        }
                        // 7 0::numChildren
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['numChildren'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgnumChildren;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[24]);
                            }
                        }
                        stack2--;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setChildIndex(stack1, stack2);
                        } else {
                            // 7 0::setChildIndex
                            {
                                let t = stack0;
                                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[25], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::IS_SKINS_PANEL
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_SKINS_PANEL;
                        if (!stack0) { p = 2627; continue; };
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[20]);
                        }
                        stack1 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['HEIGHT'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgHEIGHT;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = 162;// JIT: redundant assigment, value unused
                        stack2 -= 162;
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        stack0 |= 0;
                        local5 = stack0;
                        { p = 2648; continue; };
                    case 2627:
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack0 = temp.$Bgint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[20]);
                        }
                        stack1 = context.savedScope.global.object;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['HEIGHT'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgHEIGHT;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack3 = 130;// JIT: redundant assigment, value unused
                        stack2 -= 130;
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        stack0 |= 0;
                        local5 = stack0;
                    case 2648:
                        stack0 = local5;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BglevelCompletePanel;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack0 -= stack1;
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        stack0 /= 2;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local4 = stack1;
                        stack1 = 12;
                        if (!(12 > stack0)) { p = 2676; continue; };
                        stack0 = 12;
                        stack0 = +12;
                        local4 = stack0;
                    case 2676:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BglevelCompletePanel;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        stack1 += local4;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
                        stack1 = local5;
                        if (!(local5 <= stack0)) { p = 2758; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BglevelCompletePanel;
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = local5;
                        } else {
                            context.setproperty($names[22], local5, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanelEntering
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglevelCompletePanelEntering = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanelStaying
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglevelCompletePanelStaying = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::gameOverDelay
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BggameOverDelay = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::IS_SKINS_PANEL
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_SKINS_PANEL;
                        if (!stack0) { p = 2758; continue; };
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
                                stack0 = temp.axGetProperty($names[57]);
                            }
                        }
                        // 7 0:flash.events::KeyboardEvent
                        temp = scope0.findScopeProperty($names[58], true, false);
                        stack1 = temp.$BgKeyboardEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[58]);
                        }
                        // 7 0::KEY_DOWN
                        //Possible type:7 0:flash.events::KeyboardEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['KEY_DOWN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgKEY_DOWN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[59]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompleteKeyDownListener
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[69]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[61], [stack1, stack2], false);
                                }
                            }
                        }
                    case 2758:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdateLevelCompletePanelSin();
                        { p = 2896; continue; };
                    case 2767:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanelStaying
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BglevelCompletePanelStaying;
                        if (!stack0) { p = 2896; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::IS_SKINS_PANEL
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_SKINS_PANEL;
                        if (!stack0) { p = 2844; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::exit_level_counter
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgexit_level_counter;
                        stack1 = -1;
                        if (!(-1 < stack0)) { p = 2840; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 1:states:LevelState::exit_level_counter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgexit_level_counter;
                        stack0 = (stack0 | 0) + 1;
                        local7 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::exit_level_counter
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.exit_level_counter = local7;
                        } else {
                            context.setproperty($names[70], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::exit_level_counter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgexit_level_counter;
                        stack1 = 60;
                        if (60 != stack0) { p = 2840; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::LEVEL_WON
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgLEVEL_WON = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::levelEnd
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglevelEnd = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::choice
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgchoice = 4;
                    case 2840:
                        { p = 2891; continue; };
                    case 2844:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 0::gameOverDelay
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BggameOverDelay;
                        stack0 = (stack0 | 0) + 1;
                        local7 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::gameOverDelay
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.gameOverDelay = local7;
                        } else {
                            context.setproperty($names[71], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::gameOverDelay
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BggameOverDelay;
                        stack1 = 75;
                        if (!(75 <= stack0)) { p = 2891; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::LEVEL_WON
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgLEVEL_WON = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::levelEnd
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglevelEnd = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::choice
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgchoice = 4;
                    case 2891:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdateLevelCompletePanelSin();
                    case 2896:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::ad_counter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgad_counter;
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 2953; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local6 = stack1;
                        // 7 1:states:LevelState::ad_counter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgad_counter;
                        stack0 = (stack0 | 0) - 1;
                        local7 = stack0;
//                        stack0 = local6;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::ad_counter
                        if (!(local6 != undefined && local6[AX_CLASS_SYMBOL])){
                            local6.ad_counter = local7;
                        } else {
                            context.setproperty($names[72], local7, local6);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::ad_counter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgad_counter;
                        stack1 = 0;
                        if (0 != stack0) { p = 2948; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = -1;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::ad_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgad_counter = -1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgshowInterstitial();
                    case 2948:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdateLevelCompletePanelSin();
                    case 2953:
//                        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.updateLevelState();
                        } else {
                            // 7 0::updateLevelState
                            {
                                let t = local1;
                                const m = t.$BgupdateLevelState || (t = sec.box(local1), t.$BgupdateLevelState);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local1.axCallProperty($names[73], [], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/LevelState/m_updateState.js
})