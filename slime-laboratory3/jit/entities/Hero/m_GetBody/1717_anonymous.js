(function anonymous(context
) {
/*
	Index: 1122
	Path:  entities/Hero/m_GetBody/1717_anonymous
	Type:  Public
	Kind:  null
	Super: -
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_anonymous(local1 /* b2Fixture */) {
        let _this = this === context.jsGlobal ? context.savedScope.global.object : this;
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
//                        stack0 = false;// JIT: redundant assigment, value unused
                        local3 = false;
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetShape();
                        } else {
                            // 7 0::GetShape
                            {
                                let t = local1;
                                const m = t.$BgGetShape || (t = sec.box(local1), t.$BgGetShape);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetShape ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = context.savedScope.getScopeProperty($names[1], true, false);
                            _e || console.warn('[anonymous] Coerce Type not found:', "b2Shape")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = local1;
                                const m = t.$BgGetBody || (t = sec.box(local1), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetUserData();
                        } else {
                            // 7 0::GetUserData
                            {
                                let t = stack0;
                                const m = t.$BgGetUserData || (t = sec.box(stack0), t.$BgGetUserData);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetUserData ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::avoidCollisionDetection
                        //Possible type:undefined
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['avoidCollisionDetection'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgavoidCollisionDetection;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = false;
                        if (false != stack0) { p = 64; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack1 = local1.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = local1;
                                const m = t.$BgGetBody || (t = sec.box(local1), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetBody ();
                                } else { 
                                    stack1 = local1.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetTransform();
                        } else {
                            // 7 0::GetTransform
                            {
                                let t = stack1;
                                const m = t.$BgGetTransform || (t = sec.box(stack1), t.$BgGetTransform);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetTransform ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[5], [], false);
                                }
                            }
                        }
                        // 7 2:entities::groundVec
                        temp = context.savedScope.findScopeProperty($names[6], true, false);
                        stack2 = temp.$BggroundVec;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[6]);
                        }
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                           stack0 = local2.TestPoint(stack1, stack2);
                        } else {
                            // 7 0::TestPoint
                            {
                                let t = local2;
                                const m = t.$BgTestPoint || (t = sec.box(local2), t.$BgTestPoint);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgTestPoint (stack1, stack2);
                                } else { 
                                    stack0 = local2.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
                        stack0 = !!stack0;
                        local3 = stack0;
                        stack0 = local3;
                        if (!local3) { p = 64; continue; };
                        // 7 2:entities::body
                        stack0 = context.savedScope.findScopeProperty($names[8], false, false);
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2Fixture// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack1 = local1.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = local1;
                                const m = t.$BgGetBody || (t = sec.box(local1), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetBody ();
                                } else { 
                                    stack1 = local1.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 7 2:entities::body
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.body = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
                        stack0 = false;
                        return false;
                    case 64:
                        stack0 = true;
                        return true;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_GetBody/1717_anonymous.js
})