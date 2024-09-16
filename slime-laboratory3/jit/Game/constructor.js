(function anonymous(context
) {
/*
	Index: 2
	Path:  Game::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor() {
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
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::ready
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgready = true;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 3::currentState
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
        this.$BgcurrentState = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 3::currentFadeState
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
        this.$BgcurrentFadeState = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 3::counter
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgcounter = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 1:Game::ITEM_RECEIVED
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgITEM_RECEIVED = false;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::FADE_IN_FLAG
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgFADE_IN_FLAG = false;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::FADE_OUT_FLAG
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgFADE_OUT_FLAG = false;
        // 7 0:game_utils::SaveManager
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgSaveManager;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Init();
        } else {
            // 7 0::Init
            {
                let t = stack0;
                const m = t.$BgInit || (t = sec.box(stack0), t.$BgInit);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[1], [], false);
                }
            }
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[2]);
        }
        // 7 0:game_utils::SaveManager
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgSaveManager;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0::LocalData
        //Possible type:7 0:game_utils::SaveManager
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['LocalData'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgLocalData;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::data
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['data'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgdata;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        // 9 {3, 0, 1:Game, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:states, 0:states.fading, 5:Game}::MusicOn
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['MusicOn'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgMusicOn;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0::MusicOn
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MusicOn = stack1;
        } else {
            context.setproperty($names[6], stack1, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[2]);
        }
        // 7 0:game_utils::SaveManager
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgSaveManager;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0::LocalData
        //Possible type:7 0:game_utils::SaveManager
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['LocalData'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgLocalData;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::data
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['data'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgdata;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        // 9 {3, 0, 1:Game, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:states, 0:states.fading, 5:Game}::SoundOn
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['SoundOn'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgSoundOn;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[7]);
            }
        }
        // 7 0::SoundOn
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SoundOn = stack1;
        } else {
            context.setproperty($names[8], stack1, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[2]);
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Init();
        } else {
            // 7 0::Init
            {
                let t = stack0;
                const m = t.$BgInit || (t = sec.box(stack0), t.$BgInit);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[1], [], false);
                }
            }
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[2]);
        }
        // 7 0:game_utils::SaveManager
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgSaveManager;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0::LocalData
        //Possible type:7 0:game_utils::SaveManager
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['LocalData'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgLocalData;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::data
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['data'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgdata;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        // 9 {3, 0, 1:Game, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:states, 0:states.fading, 5:Game}::VARIABLE_LAST_LEVEL
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['VARIABLE_LAST_LEVEL'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgVARIABLE_LAST_LEVEL;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[9]);
            }
        }
//        stack2 = 1;// JIT: redundant assigment, value unused
        stack1 += 1;
        // 7 0::CurrentLevel
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CurrentLevel = stack1;
        } else {
            context.setproperty($names[10], stack1, stack0);
        }
        // 7 0::SoundSystem
        temp = scope0.findScopeProperty($names[11], true, false);
        stack0 = temp.$BgSoundSystem;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[11]);
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.InitSounds();
        } else {
            // 7 0::InitSounds
            {
                let t = stack0;
                const m = t.$BgInitSounds || (t = sec.box(stack0), t.$BgInitSounds);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[12], [], false);
                }
            }
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[2]);
        }
        // 7 0:game_utils::SaveManager
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgSaveManager;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0::LocalData
        //Possible type:7 0:game_utils::SaveManager
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['LocalData'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgLocalData;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::data
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['data'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgdata;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        // 9 {3, 0, 1:Game, 3, 2, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:states, 0:states.fading, 5:Game}::data1
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['data1'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgdata1;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[13]);
            }
        }
        // 7 0::SKIN_1
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SKIN_1 = stack1;
        } else {
            context.setproperty($names[14], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:states::GameEntryState
        stack1 = scope0.findScopeProperty($names[15], true, false);
        //JIT: Support fast construct:GameEntryState/Object
        stack1 = context.constructFast(stack1, [], $names[15]);
        // 7 3::gameEntryState
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::GameEntryState  */ 
        this.$BggameEntryState = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 3::gameEntryState
        //Possible type:7 0:states::GameEntryState
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::GameEntryState  */ 
        stack1 = this.$BggameEntryState;
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgchangeState(stack1);
        return;
    }
//# sourceURL=http://jit/Game/constructor.js
})