(function anonymous(context
) {
/*
	Index: 103
	Path:  __root__/1193_anonymous::anonymous
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
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = _this;
        scope0 = context.savedScope.extend(_this);
        // 7 3::s_timestep2
        stack0 = scope0.findScopeProperty($names[0], false, false);
        // 7 0:Box2D.Dynamics::b2TimeStep
        stack1 = scope0.findScopeProperty($names[1], true, false);
        //JIT: Support fast construct:b2TimeStep/Object
        stack1 = context.constructFast(stack1, [], $names[1]);
        // 7 3::s_timestep2
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.s_timestep2 = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
        // 7 3::s_xf
        stack0 = scope0.findScopeProperty($names[2], false, false);
        // 7 0:Box2D.Common.Math::b2Transform
        stack1 = scope0.findScopeProperty($names[3], true, false);
        //JIT: Support fast construct:b2Transform/Object
        stack1 = context.constructFast(stack1, [], $names[3]);
        // 7 3::s_xf
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.s_xf = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
        }
        // 7 3::s_backupA
        stack0 = scope0.findScopeProperty($names[4], false, false);
        // 7 0:Box2D.Common.Math::b2Sweep
        stack1 = scope0.findScopeProperty($names[5], true, false);
        //JIT: Support fast construct:b2Sweep/Object
        stack1 = context.constructFast(stack1, [], $names[5]);
        // 7 3::s_backupA
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.s_backupA = stack1;
        } else {
            context.setproperty($names[4], stack1, stack0);
        }
        // 7 3::s_backupB
        stack0 = scope0.findScopeProperty($names[6], false, false);
        // 7 0:Box2D.Common.Math::b2Sweep
        stack1 = scope0.findScopeProperty($names[5], true, false);
        //JIT: Support fast construct:b2Sweep/Object
        stack1 = context.constructFast(stack1, [], $names[5]);
        // 7 3::s_backupB
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.s_backupB = stack1;
        } else {
            context.setproperty($names[6], stack1, stack0);
        }
        // 7 3::s_timestep
        stack0 = scope0.findScopeProperty($names[7], false, false);
        // 7 0:Box2D.Dynamics::b2TimeStep
        stack1 = scope0.findScopeProperty($names[1], true, false);
        //JIT: Support fast construct:b2TimeStep/Object
        stack1 = context.constructFast(stack1, [], $names[1]);
        // 7 3::s_timestep
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.s_timestep = stack1;
        } else {
            context.setproperty($names[7], stack1, stack0);
        }
        // 7 3::s_queue
        stack0 = scope0.findScopeProperty($names[8], false, false);
        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World, 0:__AS3__.vec}::Vector
        temp = scope0.findScopeProperty($names[9], true, false);
        stack1 = temp.$BgVector;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[9]);
        }
        // 7 0:Box2D.Dynamics::b2Body
        temp = scope0.findScopeProperty($names[10], true, false);
        stack2 = temp.$Bgb2Body;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[10]);
        }
        stack1 = sec.applyType(stack1, [stack2]);
        //JIT: Possible source:9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World, 0:__AS3__.vec}::Vector
        stack1 = context.construct(stack1, []);
        // 7 3::s_queue
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.s_queue = stack1;
        } else {
            context.setproperty($names[8], stack1, stack0);
        }
        // 7 3::s_jointColor
        stack0 = scope0.findScopeProperty($names[11], false, false);
        // 7 0:Box2D.Common::b2Color
        stack1 = scope0.findScopeProperty($names[12], true, false);
//        stack2 = 0.5;// JIT: redundant assigment, value unused
//        stack3 = 0.8;// JIT: redundant assigment, value unused
//        stack4 = 0.8;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:b2Color/Object
        stack1 = context.constructFast(stack1, [0.5, 0.8, 0.8], $names[12]);
        // 7 3::s_jointColor
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.s_jointColor = stack1;
        } else {
            context.setproperty($names[11], stack1, stack0);
        }
        // 7 0::e_newFixture
        stack0 = scope0.findScopeProperty($names[13], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::e_newFixture
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_newFixture = 1;
        } else {
            context.setproperty($names[13], 1, stack0);
        }
        // 7 0::e_locked
        stack0 = scope0.findScopeProperty($names[14], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0::e_locked
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_locked = 2;
        } else {
            context.setproperty($names[14], 2, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1193_anonymous.js
})