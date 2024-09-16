(function anonymous(context
) {
/*
	Index: 153
	Path:  game_utils/SaveManager.Init
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_Init() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        // 7 0::LocalData
                        stack0 = scope0.findScopeProperty($names[0], false, false);
                        // 7 0:flash.net::SharedObject
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgSharedObject;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgdataName;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.getLocal(stack2);
                        } else {
                            // 7 0::getLocal
                            {
                                let t = stack1;
                                const m = t.$BggetLocal || (t = sec.box(stack1), t.$BggetLocal);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BggetLocal (stack2);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[2], [stack2], false);
                                }
                            }
                        }
                        // 7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.LocalData = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::initiliazed
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['initiliazed'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bginitiliazed;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = null;
                        if (null == stack0) { p = 39; continue; };
                        //JIT: Emit inline return
                        return;
                    case 39:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[5], true, false);
//                        stack2 = 30;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [30], $names[5]);
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::levelUnlocked
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelUnlocked = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[5], true, false);
//                        stack2 = 30;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [30], $names[5]);
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::levelUnlocked_2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelUnlocked_2 = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[5], true, false);
//                        stack2 = 30;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [30], $names[5]);
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::levelItems
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelItems = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[5], true, false);
//                        stack2 = 30;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [30], $names[5]);
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::levelItems_2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.levelItems_2 = stack1;
                        } else {
                            context.setproperty($names[9], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[5], true, false);
//                        stack2 = 30;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [30], $names[5]);
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::doorUnlocked
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.doorUnlocked = stack1;
                        } else {
                            context.setproperty($names[10], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::MusicOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.MusicOn = true;
                        } else {
                            context.setproperty($names[11], true, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::SoundOn
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.SoundOn = true;
                        } else {
                            context.setproperty($names[12], true, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::skins
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.skins = 1;
                        } else {
                            context.setproperty($names[13], 1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::data1
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.data1 = 0;
                        } else {
                            context.setproperty($names[14], 0, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::data2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.data2 = 0;
                        } else {
                            context.setproperty($names[15], 0, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::data3
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.data3 = 0;
                        } else {
                            context.setproperty($names[16], 0, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::data4
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.data4 = 0;
                        } else {
                            context.setproperty($names[17], 0, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::data5
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.data5 = 0;
                        } else {
                            context.setproperty($names[18], 0, stack0);
                        }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 273; continue; };
                    case 212:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::levelUnlocked
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelUnlocked'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelUnlocked;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack1 = local1;
                        stack2 = false;
                        context.setproperty(context.runtimename($names[19], local1), false, stack0);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::levelUnlocked_2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelUnlocked_2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelUnlocked_2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack1 = local1;
                        stack2 = false;
                        context.setproperty(context.runtimename($names[19], local1), false, stack0);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::levelItems
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelItems'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelItems;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 = local1;
                        stack2 = 0;
                        context.setproperty(context.runtimename($names[19], local1), 0, stack0);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::levelItems_2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelItems_2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelItems_2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack1 = local1;
                        stack2 = 0;
                        context.setproperty(context.runtimename($names[19], local1), 0, stack0);
                        local1 = (local1 | 0) + 1;
                    case 273:
                        stack0 = local1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['data'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgdata;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::levelUnlocked
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['levelUnlocked'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BglevelUnlocked;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::length
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
                        if (stack1 > local1) { p = 212; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::levelUnlocked
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelUnlocked'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelUnlocked;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack1 = 0;
                        stack2 = true;
                        context.setproperty(context.runtimename($names[19], 0), true, stack0);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::levelUnlocked_2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelUnlocked_2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelUnlocked_2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack1 = 0;
                        stack2 = true;
                        context.setproperty(context.runtimename($names[19], 0), true, stack0);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::VARIABLE_LAST_LEVEL
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.VARIABLE_LAST_LEVEL = 0;
                        } else {
                            context.setproperty($names[21], 0, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::VARIABLE_LAST_LEVEL_WON_SELECTED
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.VARIABLE_LAST_LEVEL_WON_SELECTED = 0;
                        } else {
                            context.setproperty($names[22], 0, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::VARIABLE_LAST_LEVEL_2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.VARIABLE_LAST_LEVEL_2 = 0;
                        } else {
                            context.setproperty($names[23], 0, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::VARIABLE_LAST_LEVEL_WON_SELECTED_2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.VARIABLE_LAST_LEVEL_WON_SELECTED_2 = 0;
                        } else {
                            context.setproperty($names[24], 0, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::qualityLevel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.qualityLevel = 0;
                        } else {
                            context.setproperty($names[25], 0, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgLocalData;
                        // 7 0::data
                        //Possible type:7 0::LocalData
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 9 {3, 5:game_utils:SaveManager, 0, 0:flash.net, 3, 0:game_utils, 2:game_utils, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 1:game_utils:SaveManager}::initiliazed
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.initiliazed = true;
                        } else {
                            context.setproperty($names[4], true, stack0);
                        }
                        // 7 0::Save
                        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgSave();
                    case 392:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/game_utils/SaveManager/Init.js
})