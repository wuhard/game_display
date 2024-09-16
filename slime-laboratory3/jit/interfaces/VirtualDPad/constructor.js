(function anonymous(context
) {
/*
	Index: 596
	Path:  interfaces/VirtualDPad::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Level */ = null) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
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
                        stack0 = this;
                        context.savedScope.superConstructor.call(this, );
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 1:interfaces:VirtualDPad::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = local1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::IS_IPHONE_X
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_IPHONE_X'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_IPHONE_X;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 36; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 24;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::additional_x_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_x_margin = 24;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::additional_y_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_y_margin = 4;
                        { p = 48; continue; };
                    case 36:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::additional_x_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_x_margin = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::additional_y_margin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgadditional_y_margin = 0;
                    case 48:
//                        stack0 = 80;// JIT: redundant assigment, value unused
                        local2 = 80;
//                        stack0 = 52;// JIT: redundant assigment, value unused
                        local2 = 52;
//                        stack0 = 48;// JIT: redundant assigment, value unused
                        local3 = 48;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::TUTORIAL_ID
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgTUTORIAL_ID = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgtutorial_counter_2 = 0;
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 1:interfaces:VirtualDPad::tutorial_counter_1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgtutorial_counter_1 = (local4|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.display::MovieClip
                        stack1 = scope0.findScopeProperty($names[2], true, false);
                        stack1 = context.constructprop($names[2], stack1, []);
                        // 7 1:interfaces:VirtualDPad::controllerContainer
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BgcontrollerContainer = stack1;
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
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::controllerContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgcontrollerContainer;
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::controllerContainer
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgcontrollerContainer;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::GFX_SCALE
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['GFX_SCALE'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgGFX_SCALE;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::controllerContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgcontrollerContainer;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::GFX_SCALE
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['GFX_SCALE'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgGFX_SCALE;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::scaleY
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleY = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::LeftControllerIPadButton
                        stack1 = scope0.findScopeProperty($names[8], true, false);
                        stack1 = context.constructprop($names[8], stack1, []);
                        // 7 1:interfaces:VirtualDPad::leftController
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BgleftController = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::RightControllerIPadButton
                        stack1 = scope0.findScopeProperty($names[9], true, false);
                        stack1 = context.constructprop($names[9], stack1, []);
                        // 7 1:interfaces:VirtualDPad::rightController
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BgrightController = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
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
                                   stack0.axCallProperty($names[10], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::rightController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgrightController;
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
                                   stack0.axCallProperty($names[10], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
                        stack1 = 8;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::additional_x_margin
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$Bgadditional_x_margin;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
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
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack2 = this.$BgleftController;
                        // 7 0::height
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['height'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgheight;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack3 = 8;// JIT: redundant assigment, value unused
                        stack2 += 8;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::additional_y_margin
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack3 = this.$Bgadditional_y_margin;
                        stack2 += stack3;
                        stack1 -= stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[14], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::rightController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgrightController;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgleftController;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack2 = this.$BgleftController;
                        // 7 0::width
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['width'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgwidth;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[15]);
                            }
                        }
                        stack1 += stack2;
//                        stack2 = 8;// JIT: redundant assigment, value unused
                        stack1 += 8;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::rightController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgrightController;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgleftController;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[14]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[14], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::controllerContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgcontrollerContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgleftController;
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::controllerContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgcontrollerContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::rightController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgrightController;
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::JumpControllerIPadButton
                        stack1 = scope0.findScopeProperty($names[16], true, false);
                        stack1 = context.constructprop($names[16], stack1, []);
                        // 7 1:interfaces:VirtualDPad::jumpController
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BgjumpController = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::DownControllerIPadButton
                        stack1 = scope0.findScopeProperty($names[17], true, false);
                        stack1 = context.constructprop($names[17], stack1, []);
                        // 7 1:interfaces:VirtualDPad::downController
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BgdownController = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::controllerContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgcontrollerContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:7 0::DownControllerIPadButton
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgjumpController;
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::controllerContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgcontrollerContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgdownController;
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
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgjumpController;
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
                                   stack0.axCallProperty($names[10], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
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
                                   stack0.axCallProperty($names[10], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgjumpController;
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
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack2 = local2;
//                        stack3 = 4;// JIT: redundant assigment, value unused
                        stack2 += 4;
                        stack1 -= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgjumpController;
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
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
                        stack2 = local3;
//                        stack3 = 4;// JIT: redundant assigment, value unused
                        stack2 += 4;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::additional_y_margin
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack3 = this.$Bgadditional_y_margin;
                        stack2 += stack3;
                        stack1 -= stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[14], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgjumpController;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        stack1 -= local2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgjumpController;
                        // 7 0::y
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[14]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[14], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgjumpController;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgjumpController;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::additional_x_margin
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$Bgadditional_x_margin;
                        stack1 -= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgdownController;
                        // 7 0::x
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::additional_x_margin
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack2 = this.$Bgadditional_x_margin;
                        stack1 -= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::rightController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgrightController;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack2 = this.$BgjumpController;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack3 = this.$BgdownController;
//                        stack4 = 0.5;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 0.5;// JIT: redundant assigment, value unused
                        local4 = 0.5;
                        // 7 0::alpha
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])){
                            stack3.alpha = 0.5;
                        } else {
                            context.setproperty($names[19], 0.5, stack3);
                        }
                        stack3 = local4;
                        //IR: KILL removed, reason: prevent optimisation
                        stack4 = local4;
                        local4 = stack4;
                        // 7 0::alpha
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])){
                            stack2.alpha = stack3;
                        } else {
                            context.setproperty($names[19], stack3, stack2);
                        }
                        stack2 = local4;
                        //IR: KILL removed, reason: prevent optimisation
                        stack3 = local4;
                        local4 = stack3;
                        // 7 0::alpha
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.alpha = stack2;
                        } else {
                            context.setproperty($names[19], stack2, stack1);
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = local4;
                        } else {
                            context.setproperty($names[19], local4, stack0);
                        }
                        // 7 0:flash.ui::Multitouch
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack0 = temp.$BgMultitouch;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[20]);
                        }
                        // 7 0:flash.ui::MultitouchInputMode
                        temp = scope0.findScopeProperty($names[21], true, false);
                        stack1 = temp.$BgMultitouchInputMode;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[21]);
                        }
                        // 7 0::TOUCH_POINT
                        //Possible type:7 0:flash.ui::MultitouchInputMode
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_POINT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_POINT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0::inputMode
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.inputMode = stack1;
                        } else {
                            context.setproperty($names[23], stack1, stack0);
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
                                stack0 = temp.axGetProperty($names[24]);
                            }
                        }
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[25]);
                        }
                        // 7 0::TOUCH_BEGIN
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_BEGIN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_BEGIN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[26]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:interfaces::stageTouchHandler
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[27]);
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
                                   stack0.axCallProperty($names[28], [stack1, stack2], false);
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
                                stack0 = temp.axGetProperty($names[24]);
                            }
                        }
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[25]);
                        }
                        // 7 0::TOUCH_MOVE
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_MOVE'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_MOVE;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[29]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:interfaces::stageTouchHandler
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[27]);
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
                                   stack0.axCallProperty($names[28], [stack1, stack2], false);
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
                                stack0 = temp.axGetProperty($names[24]);
                            }
                        }
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[25]);
                        }
                        // 7 0::TOUCH_END
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_END'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_END;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[30]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:interfaces::stageTouchEndHandler
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[31]);
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
                                   stack0.axCallProperty($names[28], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgjumpController;
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[25]);
                        }
                        // 7 0::TOUCH_BEGIN
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_BEGIN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_BEGIN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[26]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:interfaces::jumpTapHandler
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[32]);
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
                                   stack0.axCallProperty($names[28], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgjumpController;
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[25]);
                        }
                        // 7 0::TOUCH_END
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_END'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_END;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[30]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:interfaces::jumpTapHandler
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[32]);
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
                                   stack0.axCallProperty($names[28], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::jumpController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgjumpController;
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[25]);
                        }
                        // 7 0::TOUCH_OUT
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_OUT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_OUT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[33]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:interfaces::jumpTapHandler
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[32]);
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
                                   stack0.axCallProperty($names[28], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[25]);
                        }
                        // 7 0::TOUCH_BEGIN
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_BEGIN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_BEGIN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[26]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:interfaces::downTapHandler
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[34]);
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
                                   stack0.axCallProperty($names[28], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[25]);
                        }
                        // 7 0::TOUCH_END
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_END'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_END;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[30]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:interfaces::downTapHandler
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[34]);
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
                                   stack0.axCallProperty($names[28], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::downController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgdownController;
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[25]);
                        }
                        // 7 0::TOUCH_OUT
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_OUT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_OUT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[33]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:interfaces::downTapHandler
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[34]);
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
                                   stack0.axCallProperty($names[28], [stack1, stack2], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/VirtualDPad/constructor.js
})