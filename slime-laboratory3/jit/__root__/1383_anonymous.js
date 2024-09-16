(function anonymous(context
) {
/*
	Index: 379
	Path:  __root__/1383_anonymous::anonymous
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
        // 7 0:http://www.box2d.org/ns/b2internal::e_unknownShape
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = -1;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_unknownShape
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_unknownShape = -1;
        } else {
            context.setproperty($names[0], -1, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_circleShape
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_circleShape
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_circleShape = 0;
        } else {
            context.setproperty($names[1], 0, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_polygonShape
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_polygonShape
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_polygonShape = 1;
        } else {
            context.setproperty($names[2], 1, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_edgeShape
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_edgeShape
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_edgeShape = 2;
        } else {
            context.setproperty($names[3], 2, stack0);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_shapeTypeCount
        stack0 = scope0.findScopeProperty($names[4], false, false);
//        stack1 = 3;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::e_shapeTypeCount
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_shapeTypeCount = 3;
        } else {
            context.setproperty($names[4], 3, stack0);
        }
        // 7 0::e_hitCollide
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::e_hitCollide
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_hitCollide = 1;
        } else {
            context.setproperty($names[5], 1, stack0);
        }
        // 7 0::e_missCollide
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::e_missCollide
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_missCollide = 0;
        } else {
            context.setproperty($names[6], 0, stack0);
        }
        // 7 0::e_startsInsideCollide
        stack0 = scope0.findScopeProperty($names[7], false, false);
//        stack1 = -1;// JIT: redundant assigment, value unused
        // 7 0::e_startsInsideCollide
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.e_startsInsideCollide = -1;
        } else {
            context.setproperty($names[7], -1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1383_anonymous.js
})