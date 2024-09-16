(function anonymous(context
) {
/*
	Index: 602
	Path:  interfaces/VirtualDPad::m_update
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_update() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_1
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgtutorial_counter_1;
                        stack0 = (stack0 | 0) - 1;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_1
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.tutorial_counter_1 = local3;
                        } else {
                            context.setproperty($names[0], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[1], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_1
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgtutorial_counter_1;
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 95; continue; };
                        stack0 = this;
//                        stack1 = this;// JIT: redundant assigment, value unused
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgtutorial_counter_2 = 0;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_1
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.tutorial_counter_1 = local2;
                        } else {
                            context.setproperty($names[0], local2, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.5;
                        } else {
                            context.setproperty($names[2], 0.5, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::rightController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgrightController;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.5;
                        } else {
                            context.setproperty($names[2], 0.5, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgjumpController;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.5;
                        } else {
                            context.setproperty($names[2], 0.5, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.5;
                        } else {
                            context.setproperty($names[2], 0.5, stack0);
                        }
                        { p = 486; continue; };
                    case 95:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::TUTORIAL_ID
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgTUTORIAL_ID;
                        stack1 = 1;
                        if (1 != stack0) { p = 217; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgtutorial_counter_2;
                        stack0 = (stack0 | 0) + 1;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.tutorial_counter_2 = local3;
                        } else {
                            context.setproperty($names[3], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 1;
                        if (!(1 > stack0)) { p = 142; continue; };
//                        stack0 = 10;// JIT: redundant assigment, value unused
                        local1 = 10;
                        { p = 145; continue; };
                    case 142:
//                        stack0 = 15;// JIT: redundant assigment, value unused
                        local1 = 15;
                    case 145:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgtutorial_counter_2;
                        stack1 = local1;
                        if (!(local1 <= stack0)) { p = 213; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgtutorial_counter_2 = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 1;
                        if (!(1 > stack0)) { p = 195; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[2], 1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::rightController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgrightController;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[2], 1, stack0);
                        }
                        { p = 213; continue; };
                    case 195:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.5;
                        } else {
                            context.setproperty($names[2], 0.5, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::rightController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgrightController;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.5;
                        } else {
                            context.setproperty($names[2], 0.5, stack0);
                        }
                    case 213:
                        { p = 486; continue; };
                    case 217:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::TUTORIAL_ID
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgTUTORIAL_ID;
                        stack1 = 2;
                        stack0 = stack0 == 2;
                        stack1 = stack0;
                        if (stack1) { p = 237; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::TUTORIAL_ID
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgTUTORIAL_ID;
                        stack1 = 3;
                        stack0 = stack0 == 3;
                    case 237:
                        stack1 = stack0;
                        if (stack1) { p = 250; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::TUTORIAL_ID
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgTUTORIAL_ID;
                        stack1 = 5;
                        stack0 = stack0 == 5;
                    case 250:
                        stack1 = stack0;
                        if (stack1) { p = 263; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::TUTORIAL_ID
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgTUTORIAL_ID;
                        stack1 = 9;
                        stack0 = stack0 == 9;
                    case 263:
                        if (!stack0) { p = 361; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgtutorial_counter_2;
                        stack0 = (stack0 | 0) + 1;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.tutorial_counter_2 = local3;
                        } else {
                            context.setproperty($names[3], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 1;
                        if (!(1 > stack0)) { p = 304; continue; };
//                        stack0 = 10;// JIT: redundant assigment, value unused
                        local1 = 10;
                        { p = 307; continue; };
                    case 304:
//                        stack0 = 15;// JIT: redundant assigment, value unused
                        local1 = 15;
                    case 307:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgtutorial_counter_2;
                        stack1 = local1;
                        if (!(local1 <= stack0)) { p = 357; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgtutorial_counter_2 = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgjumpController;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 1;
                        if (!(1 > stack0)) { p = 348; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgjumpController;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[2], 1, stack0);
                        }
                        { p = 357; continue; };
                    case 348:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgjumpController;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.5;
                        } else {
                            context.setproperty($names[2], 0.5, stack0);
                        }
                    case 357:
                        { p = 486; continue; };
                    case 361:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::TUTORIAL_ID
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgTUTORIAL_ID;
                        stack1 = 4;
                        if (4 != stack0) { p = 476; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
                        // 7 0::visible
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['visible'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgvisible;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 472; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgtutorial_counter_2;
                        stack0 = (stack0 | 0) + 1;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.tutorial_counter_2 = local3;
                        } else {
                            context.setproperty($names[3], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 1;
                        if (!(1 > stack0)) { p = 419; continue; };
//                        stack0 = 10;// JIT: redundant assigment, value unused
                        local1 = 10;
                        { p = 422; continue; };
                    case 419:
//                        stack0 = 15;// JIT: redundant assigment, value unused
                        local1 = 15;
                    case 422:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgtutorial_counter_2;
                        stack1 = local1;
                        if (!(local1 <= stack0)) { p = 472; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgtutorial_counter_2 = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
                        // 7 0::alpha
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 1;
                        if (!(1 > stack0)) { p = 463; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 1;
                        } else {
                            context.setproperty($names[2], 1, stack0);
                        }
                        { p = 472; continue; };
                    case 463:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = 0.5;
                        } else {
                            context.setproperty($names[2], 0.5, stack0);
                        }
                    case 472:
                        { p = 486; continue; };
                    case 476:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::TUTORIAL_ID
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgTUTORIAL_ID;
                        stack1 = 7;
                        if (7 != stack0) { p = 486; continue; };
                    case 486:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::IS_USING_JOYPAD
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_USING_JOYPAD'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_USING_JOYPAD;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        if (!stack0) { p = 508; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::controllerContainer
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgcontrollerContainer;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[1], false, stack0);
                        }
                        { p = 516; continue; };
                    case 508:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::controllerContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgcontrollerContainer;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[1], true, stack0);
                        }
                    case 516:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::IS_ON_WINDOWS
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_ON_WINDOWS'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_ON_WINDOWS;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::rightController
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgrightController;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack2 = this.$BgjumpController;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack3 = this.$BgdownController;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        // 7 0::alpha
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])){
                            stack3.alpha = 0;
                        } else {
                            context.setproperty($names[2], 0, stack3);
                        }
                        stack3 = local2;
                        //IR: KILL removed, reason: prevent optimisation
                        stack4 = local2;
                        local2 = stack4;
                        // 7 0::alpha
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])){
                            stack2.alpha = stack3;
                        } else {
                            context.setproperty($names[2], stack3, stack2);
                        }
                        stack2 = local2;
                        //IR: KILL removed, reason: prevent optimisation
                        stack3 = local2;
                        local2 = stack3;
                        // 7 0::alpha
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.alpha = stack2;
                        } else {
                            context.setproperty($names[2], stack2, stack1);
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = local2;
                        } else {
                            context.setproperty($names[2], local2, stack0);
                        }
                    case 571:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/VirtualDPad/m_update.js
})