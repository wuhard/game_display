(function anonymous(context
) {
/*
	Index: 936
	Path:  fl/motion/BezierSegment::m_getValue
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:flash.geom::Point
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const flash_geom__Point_def = context.getTopLevel(2); // flash.geom:Point

    return function compiled_m_getValue(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
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

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::a
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
        stack0 = this.$Bga;
        // 7 0::x
        //Possible type:7 0:flash.geom::Point
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['x'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgx;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[0]);
            }
        }
        stack0 = +stack0;
        local2 = stack0;
        // JIT: potential type:7 0::Number
        stack0 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 *= local1;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::d
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
        stack1 = this.$Bgd;
        // 7 0::x
        //Possible type:7 0:flash.geom::Point
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
//        stack2 = local2;// JIT: redundant assigment, value unused
        stack1 -= local2;
        stack0 *= stack1;
        stack1 = 3;
        stack2 = 1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local1;
        stack2 -= local1;
        stack1 *= stack2;
        // JIT: potential type:7 0::Number
        stack2 = local1;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0::c
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
        stack3 = this.$Bgc;
        // 7 0::x
        //Possible type:7 0:flash.geom::Point
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['x'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgx;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[0]);
            }
        }
//        stack4 = local2;// JIT: redundant assigment, value unused
        stack3 -= local2;
        stack2 *= stack3;
        stack3 = 1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local1;
        stack3 -= local1;
//        stack4 = this;// JIT: redundant assigment, value unused
        // 7 0::b
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
        stack4 = this.$Bgb;
        // 7 0::x
        //Possible type:7 0:flash.geom::Point
        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
            stack4 = stack4['x'];
        } else {
            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
            stack4 = temp.$Bgx;
            if (stack4 === undefined || typeof stack4 === 'function') {
                stack4 = temp.axGetProperty($names[0]);
            }
        }
//        stack5 = local2;// JIT: redundant assigment, value unused
        stack4 -= local2;
        stack3 *= stack4;
        stack2 += stack3;
        stack1 *= stack2;
        stack0 += stack1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 *= local1;
//        stack1 = local2;// JIT: redundant assigment, value unused
        stack0 += local2;
        stack0 = +stack0;
        local3 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::a
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
        stack0 = this.$Bga;
        // 7 0::y
        //Possible type:7 0:flash.geom::Point
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['y'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgy;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
        stack0 = +stack0;
        local4 = stack0;
        // JIT: potential type:7 0::Number
        stack0 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 *= local1;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::d
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
        stack1 = this.$Bgd;
        // 7 0::y
        //Possible type:7 0:flash.geom::Point
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['y'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgy;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
//        stack2 = local4;// JIT: redundant assigment, value unused
        stack1 -= local4;
        stack0 *= stack1;
        stack1 = 3;
        stack2 = 1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local1;
        stack2 -= local1;
        stack1 *= stack2;
        // JIT: potential type:7 0::Number
        stack2 = local1;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0::c
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
        stack3 = this.$Bgc;
        // 7 0::y
        //Possible type:7 0:flash.geom::Point
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['y'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[1]);
            }
        }
//        stack4 = local4;// JIT: redundant assigment, value unused
        stack3 -= local4;
        stack2 *= stack3;
        stack3 = 1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local1;
        stack3 -= local1;
//        stack4 = this;// JIT: redundant assigment, value unused
        // 7 0::b
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Point  */ 
        stack4 = this.$Bgb;
        // 7 0::y
        //Possible type:7 0:flash.geom::Point
        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
            stack4 = stack4['y'];
        } else {
            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
            stack4 = temp.$Bgy;
            if (stack4 === undefined || typeof stack4 === 'function') {
                stack4 = temp.axGetProperty($names[1]);
            }
        }
//        stack5 = local4;// JIT: redundant assigment, value unused
        stack4 -= local4;
        stack3 *= stack4;
        stack2 += stack3;
        stack1 *= stack2;
        stack0 += stack1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 *= local1;
//        stack1 = local4;// JIT: redundant assigment, value unused
        stack0 += local4;
        stack0 = +stack0;
        local5 = stack0;
        // 7 0:flash.geom::Point
        /* GenerateLexImports */
//        stack0 = flash_geom__Point_def;// JIT: redundant assigment, value unused
//        stack1 = local3;// JIT: redundant assigment, value unused
//        stack2 = local5;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:Point/Object
        stack0 = context.constructFast(flash_geom__Point_def, [local3, local5], $names[2]);
        return stack0;
    }
//# sourceURL=http://jit/fl/motion/BezierSegment/m_getValue.js
})