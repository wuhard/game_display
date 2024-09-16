(function anonymous(context
) {
/*
	Index: 1512
	Path:  levels/ContactListener::m_PostSolve
	Type:  Public
	Kind:  Method
	Super: Box2D/Dynamics/b2ContactListener
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_PostSolve(local1 /* b2Contact */, local2 /* b2ContactImpulse */) {
        // Possible use a real "this"
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
                        local3 = 0;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local4 = NaN;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isHeroBody
                        //Possible type:undefined
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 52; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                    case 52:
                        if (!stack0) { p = 699; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetManifold();
                        } else {
                            // 7 0::GetManifold
                            {
                                let t = local1;
                                const m = t.$BgGetManifold || (t = sec.box(local1), t.$BgGetManifold);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetManifold ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[5], [], false);
                                }
                            }
                        }
                        // 7 0::m_pointCount
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['m_pointCount'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgm_pointCount;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack0 |= 0;
                        local3 = stack0;
                        stack0 = 0;
                        stack0 = +0;
                        local4 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
                        { p = 103; continue; };
                    case 79:
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack0 = temp.$Bgb2Math;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[7]);
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:Box2D.Dynamics::b2ContactImpulse// JIT: redundant assigment, value unused
                        stack2 = local2;
                        // 7 0::normalImpulses
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack2 = local2['normalImpulses'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack2 = temp.$BgnormalImpulses;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack3 = local5;
                        // 27 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::*
                        {
                            let simple = local5;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[9], local5);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.Max(local4, stack2);
                        } else {
                            // 7 0::Max
                            {
                                let t = stack0;
                                const m = t.$BgMax || (t = sec.box(stack0), t.$BgMax);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgMax (local4, stack2);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[10], [local4, stack2], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        local4 = stack0;
                        local5 = (local5 | 0) + 1;
                    case 103:
                        stack0 = local5;
                        stack1 = local3;
                        if (local3 > local5) { p = 79; continue; };
                        stack0 = local4;
                        stack1 = 10;
                        stack0 = local4 > 10;
                        stack1 = stack0;
                        if (!stack1) { p = 133; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        //Possible type:7 0:Box2D.Common.Math::b2Math
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hero'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghero;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::dead
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['dead'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdead;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 133:
                        if (!stack0) { p = 150; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hero'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghero;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.splatCheck(local4);
                        } else {
                            // 7 0::splatCheck
                            {
                                let t = stack0;
                                const m = t.$BgsplatCheck || (t = sec.box(stack0), t.$BgsplatCheck);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4);
                                } else { 
                                   stack0.axCallProperty($names[13], [local4], false);
                                }
                            }
                        }
                    case 150:
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 190; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isStickyArea
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isStickyArea'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisStickyArea;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack0 = !!stack0;
                    case 190:
                        stack1 = stack0;
                        if (stack1) { p = 236; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 236; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isStickyArea
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isStickyArea'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisStickyArea;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack0 = !!stack0;
                    case 236:
                        if (!stack0) { p = 322; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!stack0) { p = 293; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hero'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghero;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack1 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetFixtureA ();
                                } else { 
                                    stack1 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack1;
                                const m = t.$BgGetBody || (t = sec.box(stack1), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetBody ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[1], [], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack2 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetFixtureB ();
                                } else { 
                                    stack2 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack2;
                                const m = t.$BgGetBody || (t = sec.box(stack2), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetBody ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.stickBody(stack1, stack2);
                        } else {
                            // 7 0::stickBody
                            {
                                let t = stack0;
                                const m = t.$BgstickBody || (t = sec.box(stack0), t.$BgstickBody);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[15], [stack1, stack2], false);
                                }
                            }
                        }
                        { p = 322; continue; };
                    case 293:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hero'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghero;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack1 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetFixtureB ();
                                } else { 
                                    stack1 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack1;
                                const m = t.$BgGetBody || (t = sec.box(stack1), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetBody ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[1], [], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack2 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetFixtureA ();
                                } else { 
                                    stack2 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack2;
                                const m = t.$BgGetBody || (t = sec.box(stack2), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetBody ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.stickBody(stack1, stack2);
                        } else {
                            // 7 0::stickBody
                            {
                                let t = stack0;
                                const m = t.$BgstickBody || (t = sec.box(stack0), t.$BgstickBody);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[15], [stack1, stack2], false);
                                }
                            }
                        }
                    case 322:
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 362; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isIce
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isIce'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisIce;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack0 = !!stack0;
                    case 362:
                        stack1 = stack0;
                        if (stack1) { p = 408; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 408; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isIce
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isIce'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisIce;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack0 = !!stack0;
                    case 408:
                        if (!stack0) { p = 428; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hero'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghero;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setOnIce(true);
                        } else {
                            // 7 0::setOnIce
                            {
                                let t = stack0;
                                const m = t.$BgsetOnIce || (t = sec.box(stack0), t.$BgsetOnIce);
                                if( typeof m === "function" ) { 
                                    m.call(t, true);
                                } else { 
                                   stack0.axCallProperty($names[17], [true], false);
                                }
                            }
                        }
                        { p = 440; continue; };
                    case 428:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hero'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghero;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setOnIce(false);
                        } else {
                            // 7 0::setOnIce
                            {
                                let t = stack0;
                                const m = t.$BgsetOnIce || (t = sec.box(stack0), t.$BgsetOnIce);
                                if( typeof m === "function" ) { 
                                    m.call(t, false);
                                } else { 
                                   stack0.axCallProperty($names[17], [false], false);
                                }
                            }
                        }
                    case 440:
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 480; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isIcycle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isIcycle'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisIcycle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack0 = !!stack0;
                    case 480:
                        stack1 = stack0;
                        if (stack1) { p = 526; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 526; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isIcycle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isIcycle'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisIcycle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack0 = !!stack0;
                    case 526:
                        if (!stack0) { p = 545; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hero'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghero;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::makeHeroExplodeAsap
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.makeHeroExplodeAsap = true;
                        } else {
                            context.setproperty($names[19], true, stack0);
                        }
                        { p = 699; continue; };
                    case 545:
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 585; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isSnow
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isSnow'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisSnow;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        stack0 = !!stack0;
                    case 585:
                        stack1 = stack0;
                        if (stack1) { p = 631; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isHeroBody
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isHeroBody'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisHeroBody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 631; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isSnow
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isSnow'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisSnow;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        stack0 = !!stack0;
                    case 631:
                        if (!stack0) { p = 699; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isSnow
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isSnow'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisSnow;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[20]);
                            }
                        }
                        if (!stack0) { p = 679; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['collisionsManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcollisionsManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack1 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetFixtureA ();
                                } else { 
                                    stack1 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack1;
                                const m = t.$BgGetBody || (t = sec.box(stack1), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetBody ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.fetchAndMeltSnow(stack1);
                        } else {
                            // 7 0::fetchAndMeltSnow
                            {
                                let t = stack0;
                                const m = t.$BgfetchAndMeltSnow || (t = sec.box(stack0), t.$BgfetchAndMeltSnow);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1], false);
                                }
                            }
                        }
                        { p = 699; continue; };
                    case 679:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['collisionsManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcollisionsManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack1 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetFixtureB ();
                                } else { 
                                    stack1 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack1;
                                const m = t.$BgGetBody || (t = sec.box(stack1), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetBody ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.fetchAndMeltSnow(stack1);
                        } else {
                            // 7 0::fetchAndMeltSnow
                            {
                                let t = stack0;
                                const m = t.$BgfetchAndMeltSnow || (t = sec.box(stack0), t.$BgfetchAndMeltSnow);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[22], [stack1], false);
                                }
                            }
                        }
                    case 699:
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isIcycle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isIcycle'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisIcycle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 739; continue; };
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureB ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isIcycle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isIcycle'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisIcycle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        stack0 = !!stack0;
                    case 739:
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetFixtureA ();
                                } else { 
                                    stack0 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack0;
                                const m = t.$BgGetBody || (t = sec.box(stack0), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetBody ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
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
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels, 3, 2:levels, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common, 0:Box2D.Common.Math, 1:levels:ContactListener, 5:levels:ContactListener, 5:Box2D.Dynamics:b2ContactListener}::isIcycle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isIcycle'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisIcycle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        if (!stack0) { p = 787; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['collisionsManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcollisionsManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack1 = local1.GetFixtureA();
                        } else {
                            // 7 0::GetFixtureA
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureA || (t = sec.box(local1), t.$BgGetFixtureA);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetFixtureA ();
                                } else { 
                                    stack1 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack1;
                                const m = t.$BgGetBody || (t = sec.box(stack1), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetBody ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.fetchAndDestroyIcycle(stack1);
                        } else {
                            // 7 0::fetchAndDestroyIcycle
                            {
                                let t = stack0;
                                const m = t.$BgfetchAndDestroyIcycle || (t = sec.box(stack0), t.$BgfetchAndDestroyIcycle);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[23], [stack1], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 787:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['collisionsManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcollisionsManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[21]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Dynamics.Contacts::b2Contact// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack1 = local1.GetFixtureB();
                        } else {
                            // 7 0::GetFixtureB
                            {
                                let t = local1;
                                const m = t.$BgGetFixtureB || (t = sec.box(local1), t.$BgGetFixtureB);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetFixtureB ();
                                } else { 
                                    stack1 = local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetBody();
                        } else {
                            // 7 0::GetBody
                            {
                                let t = stack1;
                                const m = t.$BgGetBody || (t = sec.box(stack1), t.$BgGetBody);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetBody ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.fetchAndDestroyIcycle(stack1);
                        } else {
                            // 7 0::fetchAndDestroyIcycle
                            {
                                let t = stack0;
                                const m = t.$BgfetchAndDestroyIcycle || (t = sec.box(stack0), t.$BgfetchAndDestroyIcycle);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[23], [stack1], false);
                                }
                            }
                        }
                    case 807:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/ContactListener/m_PostSolve.js
})