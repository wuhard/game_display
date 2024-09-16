(function anonymous(context
) {
/*
	Index: 314
	Path:  __root__/1275_anonymous::anonymous
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
        // 7 3::s_xf1
        stack0 = scope0.findScopeProperty($names[0], false, false);
        // 7 0:Box2D.Common.Math::b2Transform
        stack1 = scope0.findScopeProperty($names[1], true, false);
        //JIT: Support fast construct:b2Transform/Object
        stack1 = context.constructFast(stack1, [], $names[1]);
        // 7 3::s_xf1
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.s_xf1 = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_islandFlag
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_islandFlag = 1;
        } else {
            context.setproperty($names[2], 1, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_awakeFlag
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_awakeFlag
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_awakeFlag = 2;
        } else {
            context.setproperty($names[3], 2, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_allowSleepFlag
        stack0 = scope0.findScopeProperty($names[4], false, false);
//        stack1 = 4;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_allowSleepFlag
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_allowSleepFlag = 4;
        } else {
            context.setproperty($names[4], 4, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_bulletFlag
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = 8;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_bulletFlag
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_bulletFlag = 8;
        } else {
            context.setproperty($names[5], 8, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_fixedRotationFlag
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = 16;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_fixedRotationFlag
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_fixedRotationFlag = 16;
        } else {
            context.setproperty($names[6], 16, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_activeFlag
        stack0 = scope0.findScopeProperty($names[7], false, false);
//        stack1 = 32;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_activeFlag
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_activeFlag = 32;
        } else {
            context.setproperty($names[7], 32, stack0);
        }
        // 7 0::b2_staticBody
        stack0 = scope0.findScopeProperty($names[8], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::b2_staticBody
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.b2_staticBody = 0;
        } else {
            context.setproperty($names[8], 0, stack0);
        }
        // 7 0::b2_kinematicBody
        stack0 = scope0.findScopeProperty($names[9], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::b2_kinematicBody
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.b2_kinematicBody = 1;
        } else {
            context.setproperty($names[9], 1, stack0);
        }
        // 7 0::b2_dynamicBody
        stack0 = scope0.findScopeProperty($names[10], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0::b2_dynamicBody
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.b2_dynamicBody = 2;
        } else {
            context.setproperty($names[10], 2, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1275_anonymous.js
})