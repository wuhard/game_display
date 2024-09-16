(function anonymous(context
) {
/*
	Index: 1930
	Path:  interfaces/panels/SoundHudPanel::m_soundHandler
	Type:  Protected
	Kind:  Method
	Super: flash/display/Sprite
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_soundHandler(local1 /* MouseEvent */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
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
//                        // JIT: potential type:7 0:flash.events::MouseEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::target
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['target'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgtarget;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 9 {3, 1:interfaces.panels:SoundHudPanel, 0, 0:flash.events, 0:levels, 3, 0:interfaces.panels, 2:interfaces.panels, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 5:interfaces.panels:SoundHudPanel, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::name
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['name'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgname;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = "soundOnButton";
                        if ("soundOnButton" != stack0) { p = 74; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
                        stack0 = this.$BgsplashSound;
                        // 7 0::soundOnButton
                        //Possible type:7 0::SoundSplashHudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['soundOnButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgsoundOnButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[3], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
                        stack0 = this.$BgsplashSound;
                        // 7 0::soundOffButton
                        //Possible type:7 0::SoundSplashHudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['soundOffButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgsoundOffButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[3], true, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::MusicOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.MusicOn = false;
                        } else {
                            context.setproperty($names[6], false, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::SoundOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.SoundOn = false;
                        } else {
                            context.setproperty($names[7], false, stack0);
                        }
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.StopMusic(true);
                        } else {
                            // 7 0::StopMusic
                            {
                                let t = stack0;
                                const m = t.$BgStopMusic || (t = sec.box(stack0), t.$BgStopMusic);
                                if( typeof m === "function" ) { 
                                    m.call(t, true);
                                } else { 
                                   stack0.axCallProperty($names[9], [true], false);
                                }
                            }
                        }
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
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
                                   stack0.axCallProperty($names[10], ["select"], false);
                                }
                            }
                        }
                        { p = 151; continue; };
                    case 74:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        //Possible type:7 0::SoundSystem
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
                        stack0 = this.$BgsplashSound;
                        // 7 0::soundOnButton
                        //Possible type:7 0::SoundSplashHudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['soundOnButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgsoundOnButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[3], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::splashSound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SoundSplashHudSprite  */ 
                        stack0 = this.$BgsplashSound;
                        // 7 0::soundOffButton
                        //Possible type:7 0::SoundSplashHudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['soundOffButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgsoundOffButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[3], false, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::MusicOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.MusicOn = true;
                        } else {
                            context.setproperty($names[6], true, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::SoundOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.SoundOn = true;
                        } else {
                            context.setproperty($names[7], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::level
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        stack1 = null;
                        if (null != stack0) { p = 133; continue; };
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
//                        stack1 = "menu";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlayMusic("menu");
                        } else {
                            // 7 0::PlayMusic
                            {
                                let t = stack0;
                                const m = t.$BgPlayMusic || (t = sec.box(stack0), t.$BgPlayMusic);
                                if( typeof m === "function" ) { 
                                    m.call(t, "menu");
                                } else { 
                                   stack0.axCallProperty($names[11], ["menu"], false);
                                }
                            }
                        }
                        { p = 141; continue; };
                    case 133:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:SoundHudPanel::level
                        //Possible type:7 0::SoundSystem
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
                                   stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
                    case 141:
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
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
                                   stack0.axCallProperty($names[10], ["select"], false);
                                }
                            }
                        }
                    case 151:
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::MusicOn
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['MusicOn'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgMusicOn;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 9 {3, 1:interfaces.panels:SoundHudPanel, 0, 0:flash.events, 0:levels, 3, 0:interfaces.panels, 2:interfaces.panels, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 5:interfaces.panels:SoundHudPanel, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::MusicOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.MusicOn = stack1;
                        } else {
                            context.setproperty($names[16], stack1, stack0);
                        }
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::SoundOn
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['SoundOn'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgSoundOn;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 1:interfaces.panels:SoundHudPanel, 0, 0:flash.events, 0:levels, 3, 0:interfaces.panels, 2:interfaces.panels, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 5:interfaces.panels:SoundHudPanel, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::SoundOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.SoundOn = stack1;
                        } else {
                            context.setproperty($names[17], stack1, stack0);
                        }
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[13]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Save();
                        } else {
                            // 7 0::Save
                            {
                                let t = stack0;
                                const m = t.$BgSave || (t = sec.box(stack0), t.$BgSave);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[18], [], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/panels/SoundHudPanel/m_soundHandler.js
})