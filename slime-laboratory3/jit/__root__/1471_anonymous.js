(function anonymous(context
) {
/*
	Index: 259
	Path:  __root__/1471_anonymous::anonymous
	Type:  Public
	Kind:  null
	Super: -
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_anonymous() {
        let _this = this === context.jsGlobal ? context.savedScope.global.object : this;

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = _this;
        scope0 = context.savedScope.extend(_this);
        // 7 0:http://www.box2d.org/ns/b2internal::e_unknownJoint
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_unknownJoint
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_unknownJoint = 0;
        } else {
            context.setproperty($names[0], 0, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_revoluteJoint
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_revoluteJoint
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_revoluteJoint = 1;
        } else {
            context.setproperty($names[1], 1, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_prismaticJoint
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_prismaticJoint
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_prismaticJoint = 2;
        } else {
            context.setproperty($names[2], 2, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_distanceJoint
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = 3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_distanceJoint
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_distanceJoint = 3;
        } else {
            context.setproperty($names[3], 3, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_pulleyJoint
        stack0 = scope0.findScopeProperty($names[4], false, false);
//        stack1 = 4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_pulleyJoint
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_pulleyJoint = 4;
        } else {
            context.setproperty($names[4], 4, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_mouseJoint
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = 5;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_mouseJoint
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_mouseJoint = 5;
        } else {
            context.setproperty($names[5], 5, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_gearJoint
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = 6;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_gearJoint
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_gearJoint = 6;
        } else {
            context.setproperty($names[6], 6, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_lineJoint
        stack0 = scope0.findScopeProperty($names[7], false, false);
//        stack1 = 7;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_lineJoint
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_lineJoint = 7;
        } else {
            context.setproperty($names[7], 7, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_weldJoint
        stack0 = scope0.findScopeProperty($names[8], false, false);
//        stack1 = 8;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_weldJoint
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_weldJoint = 8;
        } else {
            context.setproperty($names[8], 8, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_frictionJoint
        stack0 = scope0.findScopeProperty($names[9], false, false);
//        stack1 = 9;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_frictionJoint
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_frictionJoint = 9;
        } else {
            context.setproperty($names[9], 9, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_inactiveLimit
        stack0 = scope0.findScopeProperty($names[10], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_inactiveLimit
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_inactiveLimit = 0;
        } else {
            context.setproperty($names[10], 0, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_atLowerLimit
        stack0 = scope0.findScopeProperty($names[11], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_atLowerLimit
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_atLowerLimit = 1;
        } else {
            context.setproperty($names[11], 1, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_atUpperLimit
        stack0 = scope0.findScopeProperty($names[12], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_atUpperLimit
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_atUpperLimit = 2;
        } else {
            context.setproperty($names[12], 2, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_equalLimits
        stack0 = scope0.findScopeProperty($names[13], false, false);
//        stack1 = 3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_equalLimits
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_equalLimits = 3;
        } else {
            context.setproperty($names[13], 3, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1471_anonymous.js
})