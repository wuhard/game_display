(function anonymous(context
) {
/*
	Index: 1116
	Path:  entities/Hero::m_update
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(11)['$BgMath']; // :Math

    return function compiled_m_update() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
        // local8 is assigned before read, skip init
        let local8 = undefined
        // local9 is assigned before read, skip init
        let local9 = undefined
        // local10 is assigned before read, skip init
        let local10 = undefined
        // local11 is assigned before read, skip init
        let local11 = undefined
        // local12 is assigned before read, skip init
        let local12 = undefined
        // local13 is assigned before read, skip init
        let local13 = undefined
        // local14 is assigned before read, skip init
        let local14 = undefined
        // local15 is assigned before read, skip init
        let local15 = undefined
        // local16 is assigned before read, skip init
        let local16 = undefined
        // local17 is assigned before read, skip init
        let local17 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
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
//                        stack0 = undefined;// JIT: redundant assigment, value unused
                        
                        local2 = undefined;
//                        stack0 = undefined;// JIT: redundant assigment, value unused
                        
                        local3 = undefined;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local4 = NaN;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local7 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local8 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local9 = null;
//                        stack0 = undefined;// JIT: redundant assigment, value unused
                        
                        local11 = undefined;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local12 = NaN;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local16 = stack1;
                        // 7 0::stickCounter
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgstickCounter;
                        stack0 = (stack0 | 0) - 1;
                        local17 = stack0;
//                        stack0 = local16;// JIT: redundant assigment, value unused
//                        stack1 = local17;// JIT: redundant assigment, value unused
                        // 7 0::stickCounter
                        if (!(local16 != undefined && local16[AX_CLASS_SYMBOL])){
                            local16.stickCounter = local17;
                        } else {
                            context.setproperty($names[0], local17, local16);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stickCounter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgstickCounter;
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 74; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::stickCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgstickCounter = 0;
                    case 74:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::reset_counter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgreset_counter;
                        stack1 = 0;
                        if (0 != stack0) { p = 95; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgfixSlime();
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::reset_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgreset_counter = 1;
                    case 95:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye1;
                        // 7 0::currentFrame
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentFrame'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentFrame;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 2;
                        if (2 != stack0) { p = 129; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bgeye2;
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::gfxHandle
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['gfxHandle'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BggfxHandle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye1
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bgeye1;
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::gfxHandle
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['gfxHandle'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BggfxHandle;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::currentFrame
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentFrame'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentFrame;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[4], [stack1], false);
                                }
                            }
                        }
                    case 129:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::justUnsplatted
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgjustUnsplatted;
                        if (!stack0) { p = 179; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local16 = stack1;
                        // 7 0::justUnsplattedCounter
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgjustUnsplattedCounter;
                        stack0 = (stack0 | 0) + 1;
                        local17 = stack0;
//                        stack0 = local16;// JIT: redundant assigment, value unused
//                        stack1 = local17;// JIT: redundant assigment, value unused
                        // 7 0::justUnsplattedCounter
                        if (!(local16 != undefined && local16[AX_CLASS_SYMBOL])){
                            local16.justUnsplattedCounter = local17;
                        } else {
                            context.setproperty($names[5], local17, local16);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::justUnsplattedCounter
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgjustUnsplattedCounter;
                        stack1 = 90;
                        if (!(90 < stack0)) { p = 179; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::justUnsplatted
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgjustUnsplatted = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::justUnsplattedCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgjustUnsplattedCounter = 0;
                    case 179:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroRadius
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgheroRadius;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgmagnitude;
                        stack0 *= stack1;
                        stack0 = +stack0;
                        local1 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::dead
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bgdead;
                        if (stack0) { p = 394; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
                        { p = 355; continue; };
                    case 206:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local5;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack0;
                                const m = t.$BgGetPosition || (t = sec.box(stack0), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::x
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack2 = temp.$Bgint;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[9]);
                        }
                        stack3 = context.savedScope.global.object;
                        stack4 = local5;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::numCircles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack5 = this.$BgnumCircles;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
                        stack4 += stack5;
                        stack2 = context.call(stack2, stack3, [stack4], scope0);
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = stack2;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[6], stack2);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::x
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack0 -= stack1;
                        
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local5;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack0;
                                const m = t.$BgGetPosition || (t = sec.box(stack0), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::y
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack2 = temp.$Bgint;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[9]);
                        }
                        stack3 = context.savedScope.global.object;
                        stack4 = local5;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::numCircles
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack5 = this.$BgnumCircles;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
                        stack4 += stack5;
                        stack2 = context.call(stack2, stack3, [stack4], scope0);
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = stack2;
                            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

                            if (typeof simple === "number") {
                                stack1 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack1 = b_obj['$Bg' + simple];
                                if (stack1 === undefined || typeof stack1 === 'function') {
                                    const rm = context.runtimename($names[6], stack2);
                                    stack1 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::y
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack0 -= stack1;
                        
                        local3 = stack0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        stack1 = local2;
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        stack1 *= local2;
                        stack2 = local3;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        stack2 *= local3;
                        stack1 += stack2;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.sqrt(stack1);
                        } else {
                            // 7 0::sqrt
                            {
                                let t = __Math;
                                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgsqrt (stack1);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        stack1 = stack0;
                        local4 = stack1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_scale'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_scale;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack0 *= stack1;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local4 = stack1;
                        stack1 = local1;
//                        stack2 = 6;// JIT: redundant assigment, value unused
                        stack1 *= 6;
                        if (!(stack1 < stack0)) { p = 353; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        // 7 0::GameOverAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['GameOverAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgGameOverAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                    case 353:
                        local5 = (local5 | 0) + 1;
                    case 355:
                        stack0 = local5;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::numCircles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgnumCircles;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 /= 2;
                        if (stack1 > local5) { p = 206; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::makeHeroExplodeAsap
                        //Possible type:7 0::animationManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgmakeHeroExplodeAsap;
                        if (!stack0) { p = 394; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::makeHeroExplodeAsap
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgmakeHeroExplodeAsap = false;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        // 7 0::GameOverAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['GameOverAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgGameOverAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[16]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                    case 394:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetMidPosition();
                        // 7 0::currentMidPosition
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        this.$BgcurrentMidPosition = stack1;
                        stack0 = 1;
                        stack0 = +1;
                        local6 = stack0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::NORMAL_GRAVITY
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['NORMAL_GRAVITY'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgNORMAL_GRAVITY;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 424; continue; };
                        stack0 = -1;
                        stack0 = +-1;
                        local6 = stack0;
                    case 424:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 674; continue; };
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[19], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 /= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack3 = 16;// JIT: redundant assigment, value unused
                        stack2 += 16;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack2 /= stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[19]);
                        //IR: Drop coerce, reason: redundant
                        local7 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[19], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = 7;// JIT: redundant assigment, value unused
                        stack1 -= 7;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 /= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack3 = 22;// JIT: redundant assigment, value unused
                        stack2 += 22;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack2 /= stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[19]);
                        //IR: Drop coerce, reason: redundant
                        local8 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[19], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = 7;// JIT: redundant assigment, value unused
                        stack1 += 7;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 /= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack3 = 22;// JIT: redundant assigment, value unused
                        stack2 += 22;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack2 /= stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[19]);
                        //IR: Drop coerce, reason: redundant
                        local9 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack1 = local7['x'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack2 = local7['y'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack3 = true;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgGetBody(stack1, stack2, true);
                        stack1 = null;
                        stack0 = stack0 == null;
                        stack0 = !stack0;
                        stack1 = stack0;
                        if (stack1) { p = 602; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack1 = local8['x'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local8;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack2 = local8['y'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack3 = true;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgGetBody(stack1, stack2, true);
                        stack1 = null;
                        stack0 = stack0 == null;
                        stack0 = !stack0;
                    case 602:
                        stack1 = stack0;
                        if (stack1) { p = 627; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack1 = local9['x'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local9;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack2 = local9['y'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack3 = true;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgGetBody(stack1, stack2, true);
                        stack1 = null;
                        stack0 = stack0 == null;
                        stack0 = !stack0;
                    case 627:
                        if (!stack0) { p = 648; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        // 7 0::GroundCollisionAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['GroundCollisionAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgGroundCollisionAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                        { p = 670; continue; };
                    case 648:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_STICKED
                        //Possible type:7 0::animationManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_STICKED;
                        stack1 = false;
                        if (false != stack0) { p = 670; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        // 7 0::NoGroundAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['NoGroundAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgNoGroundAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                    case 670:
                        { p = 981; continue; };
                    case 674:
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[19], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 /= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack2 /= stack3;
                        stack3 = 18;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$Bgmagnitude;
                        stack3 *= stack4;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack3 /= stack4;
//                        stack4 = local6;// JIT: redundant assigment, value unused
                        stack3 *= local6;
                        stack2 += stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[19]);
                        //IR: Drop coerce, reason: redundant
                        local7 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[19], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 /= stack2;
                        stack2 = 8;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgmagnitude;
                        stack2 *= stack3;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack2 /= stack3;
                        stack1 -= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack2 /= stack3;
                        stack3 = 24;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$Bgmagnitude;
                        stack3 *= stack4;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack3 /= stack4;
//                        stack4 = local6;// JIT: redundant assigment, value unused
                        stack3 *= local6;
                        stack2 += stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[19]);
                        //IR: Drop coerce, reason: redundant
                        local8 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[19], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 /= stack2;
                        stack2 = 8;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bgmagnitude;
                        stack2 *= stack3;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack2 /= stack3;
                        stack1 += stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack2 /= stack3;
                        stack3 = 24;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::magnitude
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$Bgmagnitude;
                        stack3 *= stack4;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack3 /= stack4;
//                        stack4 = local6;// JIT: redundant assigment, value unused
                        stack3 *= local6;
                        stack2 += stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[19]);
                        //IR: Drop coerce, reason: redundant
                        local9 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack1 = local7['x'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local7;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
                            stack2 = local7['y'];
                        } else {
                            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack3 = true;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgGetBody(stack1, stack2, true);
                        stack1 = null;
                        stack0 = stack0 == null;
                        stack0 = !stack0;
                        stack1 = stack0;
                        if (stack1) { p = 913; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack1 = local8['x'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local8;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local8 != undefined && local8[AX_CLASS_SYMBOL])) {
                            stack2 = local8['y'];
                        } else {
                            temp = local8[AX_CLASS_SYMBOL] ? local8 : sec.box(local8);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack3 = true;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgGetBody(stack1, stack2, true);
                        stack1 = null;
                        stack0 = stack0 == null;
                        stack0 = !stack0;
                    case 913:
                        stack1 = stack0;
                        if (stack1) { p = 938; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local9;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack1 = local9['x'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local9;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local9 != undefined && local9[AX_CLASS_SYMBOL])) {
                            stack2 = local9['y'];
                        } else {
                            temp = local9[AX_CLASS_SYMBOL] ? local9 : sec.box(local9);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack3 = true;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgGetBody(stack1, stack2, true);
                        stack1 = null;
                        stack0 = stack0 == null;
                        stack0 = !stack0;
                    case 938:
                        if (!stack0) { p = 959; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        // 7 0::GroundCollisionAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['GroundCollisionAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgGroundCollisionAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[22]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                        { p = 981; continue; };
                    case 959:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_STICKED
                        //Possible type:7 0::animationManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_STICKED;
                        stack1 = false;
                        if (false != stack0) { p = 981; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        // 7 0::NoGroundAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['NoGroundAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgNoGroundAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                    case 981:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetMediumLinearVelocity();
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0::currentMediumYLinearVelocity
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgcurrentMediumYLinearVelocity = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::lastMediumYLinearVelocity
                        //Possible type:7 0::animationManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BglastMediumYLinearVelocity;
                        stack1 = 0;
                        stack0 = stack0 < 0;
                        stack1 = stack0;
                        if (!stack1) { p = 1013; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMediumYLinearVelocity
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgcurrentMediumYLinearVelocity;
                        stack1 = 0;
                        stack0 = stack0 >= 0;
                    case 1013:
                        if (!stack0) { p = 1030; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        // 7 0::PositiveYVelAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['PositiveYVelAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgPositiveYVelAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[24]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                    case 1030:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMediumYLinearVelocity
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgcurrentMediumYLinearVelocity;
                        // 7 0::lastMediumYLinearVelocity
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BglastMediumYLinearVelocity = (+stack1);
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetMediumLinearVelocity();
                        // 7 0::x
                        //Possible type:7 0::Number
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.abs(stack1);
                        } else {
                            // 7 0::abs
                            {
                                let t = __Math;
                                const m = t.$Bgabs || (t = sec.box(__Math), t.$Bgabs);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgabs (stack1);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[25], [stack1], false);
                                }
                            }
                        }
                        stack1 = 0.2;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 /= stack2;
                        if (!(stack1 > stack0)) { p = 1079; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        // 7 0::ZeroXVelAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['ZeroXVelAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgZeroXVelAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[26]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                    case 1079:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_ON_ICE
                        //Possible type:7 0::animationManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_ON_ICE;
                        if (!stack0) { p = 1103; continue; };
                        // 7 0::xVel
                        stack0 = scope0.findScopeProperty($names[27], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxVel;
//                        stack2 = 0.95;// JIT: redundant assigment, value unused
                        stack1 *= 0.95;
                        // 7 0::xVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.xVel = stack1;
                        } else {
                            context.setproperty($names[27], stack1, stack0);
                        }
                        { p = 1115; continue; };
                    case 1103:
                        // 7 0::xVel
                        stack0 = scope0.findScopeProperty($names[27], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxVel;
//                        stack2 = 0.8;// JIT: redundant assigment, value unused
                        stack1 *= 0.8;
                        // 7 0::xVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.xVel = stack1;
                        } else {
                            context.setproperty($names[27], stack1, stack0);
                        }
                    case 1115:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::upPressed
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['upPressed'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgupPressed;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[28]);
                            }
                        }
                        if (!stack0) { p = 1141; continue; };
                        // 7 0::yVel
                        stack0 = scope0.findScopeProperty($names[29], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgyVel;
//                        stack2 = 0.7;// JIT: redundant assigment, value unused
                        stack1 *= 0.7;
                        // 7 0::yVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.yVel = stack1;
                        } else {
                            context.setproperty($names[29], stack1, stack0);
                        }
                        { p = 1153; continue; };
                    case 1141:
                        // 7 0::yVel
                        stack0 = scope0.findScopeProperty($names[29], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgyVel;
//                        stack2 = 0.4;// JIT: redundant assigment, value unused
                        stack1 *= 0.4;
                        // 7 0::yVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.yVel = stack1;
                        } else {
                            context.setproperty($names[29], stack1, stack0);
                        }
                    case 1153:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_PIPE
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_PIPE;
                        if (!stack0) { p = 1171; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostBody
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$BgheroFrostBody;
//                        stack1 = -20;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetAngularVelocity(-20);
                        } else {
                            // 7 0::SetAngularVelocity
                            {
                                let t = stack0;
                                const m = t.$BgSetAngularVelocity || (t = sec.box(stack0), t.$BgSetAngularVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, -20);
                                } else { 
                                   stack0.axCallProperty($names[30], [-20], false);
                                }
                            }
                        }
                    case 1171:
                        stack0 = 1;
                        stack0 = +1;
                        local10 = stack0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::leftPressed
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['leftPressed'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgleftPressed;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[31]);
                            }
                        }
                        if (!stack0) { p = 1370; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::last_pressed_left
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bglast_pressed_left;
                        if (stack0) { p = 1200; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::t_tick
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_tick = 0;
                    case 1200:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_ON_ICE
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_ON_ICE;
                        if (!stack0) { p = 1275; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
                        { p = 1262; continue; };
                    case 1216:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local5;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!stack0) { p = 1260; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local5;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = -100;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = 1;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::ice_vector
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$Bgice_vector;
                        stack3 -= stack4;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.abs(stack3);
                        } else {
                            // 7 0::abs
                            {
                                let t = __Math;
                                const m = t.$Bgabs || (t = sec.box(__Math), t.$Bgabs);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgabs (stack3);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[25], [stack3], false);
                                }
                            }
                        }
                        stack1 *= stack2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetAngularVelocity(stack1);
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::SetAngularVelocity
                            {
                                let t = stack0;
                                const m = t.$BgSetAngularVelocity || (t = sec.box(stack0), t.$BgSetAngularVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[32], [stack1], false);
                                }
                            }
                        }
                    case 1260:
                        local5 = (local5 | 0) + 1;
                    case 1262:
                        stack0 = local5;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[33]);
                            }
                        }
                        if (stack1 > local5) { p = 1216; continue; };
                    case 1275:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::last_pressed_left
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bglast_pressed_left = true;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        // 7 0::WalkKeyAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['WalkKeyAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgWalkKeyAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[34]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::ice_vector
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgice_vector;
//                        stack2 = 0.1;// JIT: redundant assigment, value unused
                        stack1 -= 0.1;
                        // 7 1:entities:Hero::ice_vector
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgice_vector = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::ice_vector
                        //Possible type:7 0::animationManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgice_vector;
                        stack1 = -1;
                        if (!(-1 >= stack0)) { p = 1320; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = -1;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::ice_vector
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgice_vector = -1;
                    case 1320:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = 0;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = 0;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], 0);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetAngularDamping();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetAngularDamping
                            {
                                let t = stack0;
                                const m = t.$BgGetAngularDamping || (t = sec.box(stack0), t.$BgGetAngularDamping);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetAngularDamping ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[35], [], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local10 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_ON_ICE
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_ON_ICE;
                        if (!stack0) { p = 1360; continue; };
                        // 7 0::xVel
                        stack0 = scope0.findScopeProperty($names[27], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxVel;
//                        stack2 = 0.075;// JIT: redundant assigment, value unused
                        stack1 -= 0.075;
                        // 7 0::xVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.xVel = stack1;
                        } else {
                            context.setproperty($names[27], stack1, stack0);
                        }
                        { p = 1370; continue; };
                    case 1360:
                        // 7 0::xVel
                        stack0 = scope0.findScopeProperty($names[27], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxVel;
                        stack1--;
                        // 7 0::xVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.xVel = stack1;
                        } else {
                            context.setproperty($names[27], stack1, stack0);
                        }
                    case 1370:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::rightPressed
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rightPressed'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrightPressed;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[36]);
                            }
                        }
                        if (!stack0) { p = 1566; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::last_pressed_left
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bglast_pressed_left;
                        if (!stack0) { p = 1394; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::t_tick
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_tick = 0;
                    case 1394:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_ON_ICE
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_ON_ICE;
                        if (!stack0) { p = 1469; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
                        { p = 1456; continue; };
                    case 1410:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local5;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!stack0) { p = 1454; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local5;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = 100;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        stack3 = 1;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::ice_vector
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$Bgice_vector;
                        stack3 -= stack4;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.abs(stack3);
                        } else {
                            // 7 0::abs
                            {
                                let t = __Math;
                                const m = t.$Bgabs || (t = sec.box(__Math), t.$Bgabs);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgabs (stack3);
                                } else { 
                                    stack2 = __Math.axCallProperty($names[25], [stack3], false);
                                }
                            }
                        }
                        stack1 *= stack2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetAngularVelocity(stack1);
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::SetAngularVelocity
                            {
                                let t = stack0;
                                const m = t.$BgSetAngularVelocity || (t = sec.box(stack0), t.$BgSetAngularVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[32], [stack1], false);
                                }
                            }
                        }
                    case 1454:
                        local5 = (local5 | 0) + 1;
                    case 1456:
                        stack0 = local5;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[33]);
                            }
                        }
                        if (stack1 > local5) { p = 1410; continue; };
                    case 1469:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::last_pressed_left
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bglast_pressed_left = false;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        // 7 0::WalkKeyAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['WalkKeyAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgWalkKeyAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[34]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::ice_vector
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgice_vector;
//                        stack2 = 0.1;// JIT: redundant assigment, value unused
                        stack1 += 0.1;
                        // 7 1:entities:Hero::ice_vector
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgice_vector = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::ice_vector
                        //Possible type:7 0::animationManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgice_vector;
                        stack1 = 1;
                        if (!(1 <= stack0)) { p = 1514; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::ice_vector
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgice_vector = 1;
                    case 1514:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = 0;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = 0;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], 0);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetAngularDamping();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetAngularDamping
                            {
                                let t = stack0;
                                const m = t.$BgGetAngularDamping || (t = sec.box(stack0), t.$BgGetAngularDamping);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetAngularDamping ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[35], [], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local10 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_ON_ICE
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_ON_ICE;
                        if (!stack0) { p = 1554; continue; };
                        // 7 0::xVel
                        stack0 = scope0.findScopeProperty($names[27], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxVel;
//                        stack2 = 0.075;// JIT: redundant assigment, value unused
                        stack1 += 0.075;
                        // 7 0::xVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.xVel = stack1;
                        } else {
                            context.setproperty($names[27], stack1, stack0);
                        }
                        { p = 1566; continue; };
                    case 1554:
                        // 7 0::xVel
                        stack0 = scope0.findScopeProperty($names[27], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxVel;
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        // 7 0::xVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.xVel = stack1;
                        } else {
                            context.setproperty($names[27], stack1, stack0);
                        }
                    case 1566:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local16 = stack1;
                        // 7 0::coyote_time
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgcoyote_time;
                        stack1 = stack0;
                        stack1 = (stack1 | 0) - 1;
                        local17 = stack1;
//                        stack1 = local16;// JIT: redundant assigment, value unused
//                        stack2 = local17;// JIT: redundant assigment, value unused
                        // 7 0::coyote_time
                        if (!(local16 != undefined && local16[AX_CLASS_SYMBOL])){
                            local16.coyote_time = local17;
                        } else {
                            context.setproperty($names[37], local17, local16);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 1607; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BganimationManager;
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[15], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[15]);
                        }
                        // 7 0::JumpKeyAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['JumpKeyAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgJumpKeyAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[38]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[17], [stack1], false);
                                }
                            }
                        }
                    case 1607:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::leftPressed
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['leftPressed'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgleftPressed;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[31]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 1627; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::rightPressed
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rightPressed'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrightPressed;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[36]);
                            }
                        }
                        stack0 = !!stack0;
                    case 1627:
                        if (!stack0) { p = 1685; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::t_tick
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgt_tick;
                        stack2 = 1;
//                        stack3 = 30;// JIT: redundant assigment, value unused
                        stack2 /= 30;
                        stack1 += stack2;
                        // 7 1:entities:Hero::t_tick
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_tick = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::t_tick
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgt_tick;
                        stack1 = 1;
                        if (!(1 < stack0)) { p = 1661; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::t_tick
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_tick = 1;
                    case 1661:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:game_utils::Easings
                        temp = scope0.findScopeProperty($names[39], true, false);
                        stack1 = temp.$BgEasings;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[39]);
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::t_tick
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgt_tick;
//                        stack3 = 0;// JIT: redundant assigment, value unused
//                        stack4 = 1;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.easeInQuad(stack2, 0, 1, 1);
                        } else {
                            // 7 0::easeInQuad
                            {
                                let t = stack1;
                                const m = t.$BgeaseInQuad || (t = sec.box(stack1), t.$BgeaseInQuad);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgeaseInQuad (stack2, 0, 1, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[40], [stack2, 0, 1, 1], false);
                                }
                            }
                        }
                        // 7 1:entities:Hero::ice_vector
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgice_vector = (+stack1);
                        { p = 1732; continue; };
                    case 1685:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::t_tick
                        //Possible type:7 0:game_utils::Easings
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgt_tick;
//                        stack2 = 0.2;// JIT: redundant assigment, value unused
                        stack1 -= 0.2;
                        // 7 1:entities:Hero::t_tick
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_tick = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::t_tick
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgt_tick;
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 1712; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::t_tick
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_tick = 0;
                    case 1712:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:game_utils::Easings
                        temp = scope0.findScopeProperty($names[39], true, false);
                        stack1 = temp.$BgEasings;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[39]);
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:entities:Hero::t_tick
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgt_tick;
//                        stack3 = 0;// JIT: redundant assigment, value unused
//                        stack4 = 1;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.easeInQuad(stack2, 0, 1, 1);
                        } else {
                            // 7 0::easeInQuad
                            {
                                let t = stack1;
                                const m = t.$BgeaseInQuad || (t = sec.box(stack1), t.$BgeaseInQuad);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgeaseInQuad (stack2, 0, 1, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[40], [stack2, 0, 1, 1], false);
                                }
                            }
                        }
                        // 7 1:entities:Hero::ice_vector
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgice_vector = (+stack1);
                    case 1732:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::ZERO_GRAVITY
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['ZERO_GRAVITY'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgZERO_GRAVITY;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[41]);
                            }
                        }
                        if (!stack0) { p = 1754; continue; };
                        // 7 0::xVel
                        stack0 = scope0.findScopeProperty($names[27], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgxVel;
//                        stack2 = 0.333;// JIT: redundant assigment, value unused
                        stack1 *= 0.333;
                        // 7 0::xVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.xVel = stack1;
                        } else {
                            context.setproperty($names[27], stack1, stack0);
                        }
                    case 1754:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::isSplatted
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgisSplatted;
                        if (!stack0) { p = 1777; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        //Possible type:7 0::xVel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgmaxXVel;
//                        stack2 = 0.1;// JIT: redundant assigment, value unused
                        stack1 += 0.1;
                        // 7 0::maxXVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgmaxXVel = (+stack1);
                        { p = 1788; continue; };
                    case 1777:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgmaxXVel;
//                        stack2 = 0.7;// JIT: redundant assigment, value unused
                        stack1 *= 0.7;
                        // 7 0::maxXVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgmaxXVel = (+stack1);
                    case 1788:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgmaxXVel;
                        stack1 = 4;
                        if (!(4 > stack0)) { p = 1808; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgmaxXVel = 4;
                        { p = 1824; continue; };
                    case 1808:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgmaxXVel;
                        stack1 = 5;
                        if (!(5 < stack0)) { p = 1824; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 5;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgmaxXVel = 5;
                    case 1824:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 2024; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 7;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgmaxXVel = 7;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostBody
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$BgheroFrostBody;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[19], true, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgxVel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack2 /= stack3;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgyVel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack3 /= stack4;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[19]);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostBody
                        //Possible type:7 0::xVel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack2 = this.$BgheroFrostBody;
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack2;
                                const m = t.$BgGetPosition || (t = sec.box(stack2), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.ApplyImpulse(stack1, stack2);
                        } else {
                            // 7 0::ApplyImpulse
                            {
                                let t = stack0;
                                const m = t.$BgApplyImpulse || (t = sec.box(stack0), t.$BgApplyImpulse);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[43], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostBody
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$BgheroFrostBody;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack0), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[44], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        
                        local11 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostBody
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$BgheroFrostBody;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack0), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[44], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
                        stack0 = +stack0;
                        local12 = stack0;
                        stack0 = local11;
//                        stack1 = 0.98;// JIT: redundant assigment, value unused
                        stack0 *= 0.98;
                        
                        local11 = stack0;
                        stack0 = local12;
//                        stack1 = 0.98;// JIT: redundant assigment, value unused
                        stack0 *= 0.98;
                        stack0 = +stack0;
                        local12 = stack0;
                        stack0 = local11;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgmaxXVel;
                        if (!(stack1 < local11)) { p = 1944; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgmaxXVel;
                        
                        local11 = stack0;
                        { p = 1963; continue; };
                    case 1944:
                        stack0 = local11;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgmaxXVel;
                        stack1 = -stack1;
                        if (!(stack1 > local11)) { p = 1963; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgmaxXVel;
                        stack0 = -stack0;
                        
                        local11 = stack0;
                    case 1963:
                        stack0 = local12;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxYVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgmaxYVel;
                        if (!(stack1 < local12)) { p = 1984; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxYVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgmaxYVel;
                        stack0 = +stack0;
                        local12 = stack0;
                        { p = 2003; continue; };
                    case 1984:
                        stack0 = local12;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxYVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgmaxYVel;
                        stack1 = -stack1;
                        if (!(stack1 > local12)) { p = 2003; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxYVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgmaxYVel;
                        stack0 = -stack0;
                        stack0 = +stack0;
                        local12 = stack0;
                    case 2003:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostBody
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$BgheroFrostBody;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[19], true, false);
//                        stack2 = local11;// JIT: redundant assigment, value unused
//                        stack3 = local12;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [local11, local12], $names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetLinearVelocity(stack1);
                        } else {
                            // 7 0::SetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgSetLinearVelocity || (t = sec.box(stack0), t.$BgSetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[45], [stack1], false);
                                }
                            }
                        }
                        { p = 2287; continue; };
                    case 2024:
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
                        { p = 2274; continue; };
                    case 2032:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local5;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[19], true, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgxVel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack2 /= stack3;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgyVel;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack3 /= stack4;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[19]);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::xVel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
                        stack3 = local5;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[6], local5);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack2;
                                const m = t.$BgGetPosition || (t = sec.box(stack2), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.ApplyImpulse(stack1, stack2);
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::ApplyImpulse
                            {
                                let t = stack0;
                                const m = t.$BgApplyImpulse || (t = sec.box(stack0), t.$BgApplyImpulse);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[46], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local5;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetLinearVelocity();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack0), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[47], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::x
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        
                        local11 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local5;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetLinearVelocity();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack0), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[47], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::y
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack0 = +stack0;
                        local12 = stack0;
                        stack0 = local11;
//                        stack1 = 0.8;// JIT: redundant assigment, value unused
                        stack0 *= 0.8;
                        
                        local11 = stack0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::ZERO_GRAVITY
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['ZERO_GRAVITY'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgZERO_GRAVITY;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[41]);
                            }
                        }
                        if (!stack0) { p = 2170; continue; };
                        stack0 = local12;
                        stack1 = -2;
                        if (!(-2 >= local12)) { p = 2157; continue; };
                        stack0 = -2;
                        stack0 = +-2;
                        local12 = stack0;
                        { p = 2170; continue; };
                    case 2157:
                        stack0 = local12;
                        stack1 = 2;
                        if (!(2 < local12)) { p = 2170; continue; };
                        stack0 = 2;
                        stack0 = +2;
                        local12 = stack0;
                    case 2170:
                        stack0 = local11;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgmaxXVel;
                        if (!(stack1 < local11)) { p = 2191; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgmaxXVel;
                        
                        local11 = stack0;
                        { p = 2210; continue; };
                    case 2191:
                        stack0 = local11;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgmaxXVel;
                        stack1 = -stack1;
                        if (!(stack1 > local11)) { p = 2210; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxXVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgmaxXVel;
                        stack0 = -stack0;
                        
                        local11 = stack0;
                    case 2210:
                        stack0 = local12;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxYVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgmaxYVel;
                        if (!(stack1 < local12)) { p = 2231; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxYVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgmaxYVel;
                        stack0 = +stack0;
                        local12 = stack0;
                        { p = 2250; continue; };
                    case 2231:
                        stack0 = local12;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxYVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgmaxYVel;
                        stack1 = -stack1;
                        if (!(stack1 > local12)) { p = 2250; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::maxYVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgmaxYVel;
                        stack0 = -stack0;
                        stack0 = +stack0;
                        local12 = stack0;
                    case 2250:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgheroBodies;
                        stack1 = local5;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[6], local5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[19], true, false);
//                        stack2 = local11;// JIT: redundant assigment, value unused
//                        stack3 = local12;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [local11, local12], $names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetLinearVelocity(stack1);
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::SetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgSetLinearVelocity || (t = sec.box(stack0), t.$BgSetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[48], [stack1], false);
                                }
                            }
                        }
                        local5 = (local5 | 0) + 1;
                    case 2274:
                        stack0 = local5;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgheroBodies;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[33]);
                            }
                        }
                        if (stack1 > local5) { p = 2032; continue; };
                    case 2287:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack0), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[44], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        
                        local11 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack0), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[44], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
                        stack0 = +stack0;
                        local12 = stack0;
                        stack0 = 4;
                        stack0 = +4;
                        local13 = stack0;
                        stack0 = local11;
                        stack1 = local13;
                        if (!(local13 < local11)) { p = 2337; continue; };
//                        stack0 = local13;// JIT: redundant assigment, value unused
                        
                        local11 = local13;
                        { p = 2352; continue; };
                    case 2337:
                        stack0 = local11;
                        stack1 = local13;
                        stack1 = -local13;
                        if (!(stack1 > local11)) { p = 2352; continue; };
                        stack0 = local13;
                        stack0 = -local13;
                        
                        local11 = stack0;
                    case 2352:
                        stack0 = local12;
                        stack1 = local13;
                        if (!(local13 < local12)) { p = 2369; continue; };
                        stack0 = local13;
                        stack0 = +local13;
                        local12 = stack0;
                        { p = 2384; continue; };
                    case 2369:
                        stack0 = local12;
                        stack1 = local13;
                        stack1 = -local13;
                        if (!(stack1 > local12)) { p = 2384; continue; };
                        stack0 = local13;
                        stack0 = -local13;
                        stack0 = +stack0;
                        local12 = stack0;
                    case 2384:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::NORMAL_GRAVITY
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['NORMAL_GRAVITY'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgNORMAL_GRAVITY;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        if (!stack0) { p = 2406; continue; };
                        stack0 = local12;
//                        stack1 = 0.4;// JIT: redundant assigment, value unused
                        stack0 += 0.4;
                        stack0 = +stack0;
                        local12 = stack0;
                        { p = 2414; continue; };
                    case 2406:
                        stack0 = local12;
//                        stack1 = 0.4;// JIT: redundant assigment, value unused
                        stack0 -= 0.4;
                        stack0 = +stack0;
                        local12 = stack0;
                    case 2414:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[19], true, false);
//                        stack2 = local11;// JIT: redundant assigment, value unused
//                        stack3 = local12;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [local11, local12], $names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetLinearVelocity(stack1);
                        } else {
                            // 7 0::SetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgSetLinearVelocity || (t = sec.box(stack0), t.$BgSetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[45], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack0), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[44], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        
                        local11 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetLinearVelocity();
                        } else {
                            // 7 0::GetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgGetLinearVelocity || (t = sec.box(stack0), t.$BgGetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetLinearVelocity ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[44], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
                        stack0 = +stack0;
                        local12 = stack0;
                        stack0 = local11;
                        stack1 = local13;
                        if (!(local13 < local11)) { p = 2476; continue; };
//                        stack0 = local13;// JIT: redundant assigment, value unused
                        
                        local11 = local13;
                        { p = 2491; continue; };
                    case 2476:
                        stack0 = local11;
                        stack1 = local13;
                        stack1 = -local13;
                        if (!(stack1 > local11)) { p = 2491; continue; };
                        stack0 = local13;
                        stack0 = -local13;
                        
                        local11 = stack0;
                    case 2491:
                        stack0 = local12;
                        stack1 = local13;
                        if (!(local13 < local12)) { p = 2508; continue; };
                        stack0 = local13;
                        stack0 = +local13;
                        local12 = stack0;
                        { p = 2523; continue; };
                    case 2508:
                        stack0 = local12;
                        stack1 = local13;
                        stack1 = -local13;
                        if (!(stack1 > local12)) { p = 2523; continue; };
                        stack0 = local13;
                        stack0 = -local13;
                        stack0 = +stack0;
                        local12 = stack0;
                    case 2523:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::NORMAL_GRAVITY
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['NORMAL_GRAVITY'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgNORMAL_GRAVITY;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        if (!stack0) { p = 2545; continue; };
                        stack0 = local12;
//                        stack1 = 0.4;// JIT: redundant assigment, value unused
                        stack0 += 0.4;
                        stack0 = +stack0;
                        local12 = stack0;
                        { p = 2553; continue; };
                    case 2545:
                        stack0 = local12;
//                        stack1 = 0.4;// JIT: redundant assigment, value unused
                        stack0 -= 0.4;
                        stack0 = +stack0;
                        local12 = stack0;
                    case 2553:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_2;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[19], true, false);
//                        stack2 = local11;// JIT: redundant assigment, value unused
//                        stack3 = local12;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [local11, local12], $names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetLinearVelocity(stack1);
                        } else {
                            // 7 0::SetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgSetLinearVelocity || (t = sec.box(stack0), t.$BgSetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[45], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetAwake(true);
                        } else {
                            // 7 0::SetAwake
                            {
                                let t = stack0;
                                const m = t.$BgSetAwake || (t = sec.box(stack0), t.$BgSetAwake);
                                if( typeof m === "function" ) { 
                                    m.call(t, true);
                                } else { 
                                   stack0.axCallProperty($names[49], [true], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_2;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetAwake(true);
                        } else {
                            // 7 0::SetAwake
                            {
                                let t = stack0;
                                const m = t.$BgSetAwake || (t = sec.box(stack0), t.$BgSetAwake);
                                if( typeof m === "function" ) { 
                                    m.call(t, true);
                                } else { 
                                   stack0.axCallProperty($names[49], [true], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 2600; continue; };
                        { p = 2655; continue; };
                    case 2600:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgheart;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[19], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[20]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack2 /= stack3;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgxVel;
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack3 /= stack4;
                        stack2 += stack3;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        //Possible type:7 0::xVel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack3 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack3 /= stack4;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetPosition(stack1);
                        } else {
                            // 7 0::SetPosition
                            {
                                let t = stack0;
                                const m = t.$BgSetPosition || (t = sec.box(stack0), t.$BgSetPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[50], [stack1], false);
                                }
                            }
                        }
                    case 2655:
                        stack0 = 4;
                        stack0 = +4;
                        local14 = stack0;
                        stack0 = 0;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[13], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[13]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['m_scale'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgm_scale;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack0 /= stack1;
                        stack0 = +stack0;
                        local15 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::isSplatted
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgisSplatted;
                        stack1 = false;
                        if (false != stack0) { p = 2943; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack0;
                                const m = t.$BgGetPosition || (t = sec.box(stack0), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgheart;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local15;// JIT: redundant assigment, value unused
                        stack1 -= local15;
                        stack0 = stack0 < stack1;
                        stack1 = stack0;
                        if (!stack1) { p = 2739; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack0;
                                const m = t.$BgGetPosition || (t = sec.box(stack0), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgheart;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local15;// JIT: redundant assigment, value unused
                        stack1 -= local15;
                        stack0 = stack0 < stack1;
                    case 2739:
                        if (!stack0) { p = 2813; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack0;
                                const m = t.$BgGetPosition || (t = sec.box(stack0), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgeye_2;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
                        if (!(stack1 > stack0)) { p = 2791; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[19], true, false);
//                        stack2 = local14;// JIT: redundant assigment, value unused
                        stack3 = local14;
                        stack3 = -local14;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [local14, stack3], $names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetLinearVelocity(stack1);
                        } else {
                            // 7 0::SetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgSetLinearVelocity || (t = sec.box(stack0), t.$BgSetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[45], [stack1], false);
                                }
                            }
                        }
                        { p = 2809; continue; };
                    case 2791:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_2;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[19], true, false);
//                        stack2 = local14;// JIT: redundant assigment, value unused
                        stack3 = local14;
                        stack3 = -local14;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [local14, stack3], $names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetLinearVelocity(stack1);
                        } else {
                            // 7 0::SetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgSetLinearVelocity || (t = sec.box(stack0), t.$BgSetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[45], [stack1], false);
                                }
                            }
                        }
                    case 2809:
                        { p = 2943; continue; };
                    case 2813:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack0;
                                const m = t.$BgGetPosition || (t = sec.box(stack0), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgheart;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local15;// JIT: redundant assigment, value unused
                        stack1 += local15;
                        stack0 = stack0 > stack1;
                        stack1 = stack0;
                        if (!stack1) { p = 2871; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack0;
                                const m = t.$BgGetPosition || (t = sec.box(stack0), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgheart;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack2 = local15;// JIT: redundant assigment, value unused
                        stack1 += local15;
                        stack0 = stack0 > stack1;
                    case 2871:
                        if (!stack0) { p = 2943; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack0;
                                const m = t.$BgGetPosition || (t = sec.box(stack0), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgeye_2;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[42], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
                        if (!(stack1 > stack0)) { p = 2924; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_1;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[19], true, false);
                        stack2 = local14;
                        stack2 = -local14;
                        stack3 = local14;
                        stack3 = -local14;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetLinearVelocity(stack1);
                        } else {
                            // 7 0::SetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgSetLinearVelocity || (t = sec.box(stack0), t.$BgSetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[45], [stack1], false);
                                }
                            }
                        }
                        { p = 2943; continue; };
                    case 2924:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack0 = this.$Bgeye_2;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[19], true, false);
                        stack2 = local14;
                        stack2 = -local14;
                        stack3 = local14;
                        stack3 = -local14;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [stack2, stack3], $names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetLinearVelocity(stack1);
                        } else {
                            // 7 0::SetLinearVelocity
                            {
                                let t = stack0;
                                const m = t.$BgSetLinearVelocity || (t = sec.box(stack0), t.$BgSetLinearVelocity);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[45], [stack1], false);
                                }
                            }
                        }
                    case 2943:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdateAABB();
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_update.js
})