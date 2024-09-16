(function anonymous(context
) {
/*
	Index: 1134
	Path:  entities/Hero::m_explosionParticle
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(14)['$BgMath']; // :Math

    return function compiled_m_explosionParticle(local1 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local2 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        if (!local1) { p = 65; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::particlesManager
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particlesManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticlesManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostBody
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$BgheroFrostBody;
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
                                    stack1 = stack1.axCallProperty($names[1], [], false);
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
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroFrostBody
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
                                    stack2 = stack2.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack2 *= stack3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.createIcycleParticles(stack1, stack2);
                        } else {
                            // 7 0::createIcycleParticles
                            {
                                let t = stack0;
                                const m = t.$BgcreateIcycleParticles || (t = sec.box(stack0), t.$BgcreateIcycleParticles);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[6], [stack1, stack2], false);
                                }
                            }
                        }
                        { p = 582; continue; };
                    case 65:
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        { p = 570; continue; };
                    case 72:
                        // 7 0::DeadSlimeParticle
                        stack0 = scope0.findScopeProperty($names[7], true, false);
                        stack0 = context.constructprop($names[7], stack0, []);
                        //IR: Drop coerce, reason: redundant
                        local2 = stack0;
                        stack0 = local3;
                        stack1 = 16;
                        if (16 != local3) { p = 232; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::eye
                        //Possible type:7 0::DeadSlimeParticle
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['eye'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgeye;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetSlimeParticleIndex();
                        } else {
                            // 7 0::GetSlimeParticleIndex
                            {
                                let t = stack1;
                                const m = t.$BgGetSlimeParticleIndex || (t = sec.box(stack1), t.$BgGetSlimeParticleIndex);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetSlimeParticleIndex ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[9], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[10], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::gfxHandle
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['gfxHandle'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$BggfxHandle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetSlimeParticleIndex();
                        } else {
                            // 7 0::GetSlimeParticleIndex
                            {
                                let t = stack1;
                                const m = t.$BgGetSlimeParticleIndex || (t = sec.box(stack1), t.$BgGetSlimeParticleIndex);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetSlimeParticleIndex ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[9], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[10], [stack1], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::particlesManager
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particlesManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticlesManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack2 = this.$Bgeye_2;
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
                                    stack2 = stack2.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack2 *= stack3;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack3 = this.$Bgeye_2;
                        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
                           stack3 = stack3.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack3;
                                const m = t.$BgGetPosition || (t = sec.box(stack3), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgGetPosition ();
                                } else { 
                                    stack3 = stack3.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack3 *= stack4;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack4 = this.$Bgeye_2;
                        if (!(_a = typeof stack4, ((_a !== 'object' && _a !== 'function' ) || stack4 == null || stack4[AX_CLASS_SYMBOL]))) {
                           stack4 = stack4.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack4;
                                const m = t.$BgGetPosition || (t = sec.box(stack4), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BgGetPosition ();
                                } else { 
                                    stack4 = stack4.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['x'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack5 = temp.$BgUtils;
                        if (stack5 === undefined || typeof stack5 === 'function') {
                            stack5 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['m_scale'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgm_scale;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack4 *= stack5;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack5 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['x'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgx;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack4 -= stack5;
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_2
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack5 = this.$Bgeye_2;
                        if (!(_a = typeof stack5, ((_a !== 'object' && _a !== 'function' ) || stack5 == null || stack5[AX_CLASS_SYMBOL]))) {
                           stack5 = stack5.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack5;
                                const m = t.$BgGetPosition || (t = sec.box(stack5), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BgGetPosition ();
                                } else { 
                                    stack5 = stack5.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['y'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgy;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack6 = temp.$BgUtils;
                        if (stack6 === undefined || typeof stack6 === 'function') {
                            stack6 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['m_scale'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgm_scale;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack5 *= stack6;
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack6 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['y'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgy;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack5 -= stack6;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 0.95;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(local2, stack2, stack3, stack4, stack5, 0.95);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2, stack2, stack3, stack4, stack5, 0.95);
                                } else { 
                                   stack0.axCallProperty($names[12], [local2, stack2, stack3, stack4, stack5, 0.95], false);
                                }
                            }
                        }
                        { p = 568; continue; };
                    case 232:
                        stack0 = local3;
                        stack1 = 17;
                        if (17 != local3) { p = 380; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::eye
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['eye'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgeye;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetSlimeParticleIndex();
                        } else {
                            // 7 0::GetSlimeParticleIndex
                            {
                                let t = stack1;
                                const m = t.$BgGetSlimeParticleIndex || (t = sec.box(stack1), t.$BgGetSlimeParticleIndex);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetSlimeParticleIndex ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[9], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[10], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::gfxHandle
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['gfxHandle'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$BggfxHandle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetSlimeParticleIndex();
                        } else {
                            // 7 0::GetSlimeParticleIndex
                            {
                                let t = stack1;
                                const m = t.$BgGetSlimeParticleIndex || (t = sec.box(stack1), t.$BgGetSlimeParticleIndex);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetSlimeParticleIndex ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[9], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[10], [stack1], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::particlesManager
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particlesManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticlesManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack2 = this.$Bgeye_1;
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
                                    stack2 = stack2.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack2 *= stack3;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack3 = this.$Bgeye_1;
                        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
                           stack3 = stack3.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack3;
                                const m = t.$BgGetPosition || (t = sec.box(stack3), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgGetPosition ();
                                } else { 
                                    stack3 = stack3.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack3 *= stack4;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack4 = this.$Bgeye_1;
                        if (!(_a = typeof stack4, ((_a !== 'object' && _a !== 'function' ) || stack4 == null || stack4[AX_CLASS_SYMBOL]))) {
                           stack4 = stack4.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack4;
                                const m = t.$BgGetPosition || (t = sec.box(stack4), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BgGetPosition ();
                                } else { 
                                    stack4 = stack4.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['x'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack5 = temp.$BgUtils;
                        if (stack5 === undefined || typeof stack5 === 'function') {
                            stack5 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['m_scale'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgm_scale;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack4 *= stack5;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack5 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['x'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgx;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack4 -= stack5;
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::eye_1
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack5 = this.$Bgeye_1;
                        if (!(_a = typeof stack5, ((_a !== 'object' && _a !== 'function' ) || stack5 == null || stack5[AX_CLASS_SYMBOL]))) {
                           stack5 = stack5.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack5;
                                const m = t.$BgGetPosition || (t = sec.box(stack5), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BgGetPosition ();
                                } else { 
                                    stack5 = stack5.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['y'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgy;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack6 = temp.$BgUtils;
                        if (stack6 === undefined || typeof stack6 === 'function') {
                            stack6 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['m_scale'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgm_scale;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack5 *= stack6;
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack6 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['y'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgy;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack5 -= stack6;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 0.95;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(local2, stack2, stack3, stack4, stack5, 0.95);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2, stack2, stack3, stack4, stack5, 0.95);
                                } else { 
                                   stack0.axCallProperty($names[12], [local2, stack2, stack3, stack4, stack5, 0.95], false);
                                }
                            }
                        }
                        { p = 568; continue; };
                    case 380:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::eye
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['eye'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgeye;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[13], false, stack0);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::gfxHandle
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['gfxHandle'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$BggfxHandle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetSlimeParticleIndex();
                        } else {
                            // 7 0::GetSlimeParticleIndex
                            {
                                let t = stack1;
                                const m = t.$BgGetSlimeParticleIndex || (t = sec.box(stack1), t.$BgGetSlimeParticleIndex);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetSlimeParticleIndex ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[9], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(stack1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[10], [stack1], false);
                                }
                            }
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgrandom ();
                                } else { 
                                    stack1 = __Math.axCallProperty($names[15], [], false);
                                }
                            }
                        }
//                        stack2 = 0.7;// JIT: redundant assigment, value unused
                        stack1 *= 0.7;
//                        stack2 = 0.3;// JIT: redundant assigment, value unused
                        stack1 += 0.3;
                        // 7 0::alpha
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.alpha = stack1;
                        } else {
                            context.setproperty($names[16], stack1, local2);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgrandom ();
                                } else { 
                                    stack1 = __Math.axCallProperty($names[15], [], false);
                                }
                            }
                        }
//                        stack2 = 0.8;// JIT: redundant assigment, value unused
                        stack1 *= 0.8;
//                        stack2 = 0.2;// JIT: redundant assigment, value unused
                        stack1 += 0.2;
                        // 7 0::scaleX
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.scaleX = stack1;
                        } else {
                            context.setproperty($names[17], stack1, local2);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::scaleX
                        //Possible type:7 0::Math
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['scaleX'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$BgscaleX;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
                        // 7 0::scaleY
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.scaleY = stack1;
                        } else {
                            context.setproperty($names[18], stack1, local2);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::particlesManager
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particlesManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticlesManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgheroBodies;
                        stack3 = local3;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local3;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[19], local3);
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
                                    stack2 = stack2.axCallProperty($names[20], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack2 *= stack3;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgheroBodies;
                        stack4 = local3;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local3;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[19], local3);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
                           stack3 = stack3.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack3;
                                const m = t.$BgGetPosition || (t = sec.box(stack3), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgGetPosition ();
                                } else { 
                                    stack3 = stack3.axCallProperty($names[20], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['m_scale'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgm_scale;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack3 *= stack4;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgheroBodies;
                        stack5 = local3;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local3;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[19], local3);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack4, ((_a !== 'object' && _a !== 'function' ) || stack4 == null || stack4[AX_CLASS_SYMBOL]))) {
                           stack4 = stack4.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack4;
                                const m = t.$BgGetPosition || (t = sec.box(stack4), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$BgGetPosition ();
                                } else { 
                                    stack4 = stack4.axCallProperty($names[20], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::x
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['x'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[21]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack5 = temp.$BgUtils;
                        if (stack5 === undefined || typeof stack5 === 'function') {
                            stack5 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['m_scale'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgm_scale;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack4 *= stack5;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack5 = this.$BgcurrentMidPosition;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['x'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgx;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack4 -= stack5;
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 0::heroBodies
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgheroBodies;
                        stack6 = local3;
                        // 27 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::*
                        {
                            let simple = local3;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[19], local3);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack5, ((_a !== 'object' && _a !== 'function' ) || stack5 == null || stack5[AX_CLASS_SYMBOL]))) {
                           stack5 = stack5.GetPosition();
                        } else {
                            // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::GetPosition
                            {
                                let t = stack5;
                                const m = t.$BgGetPosition || (t = sec.box(stack5), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack5 = t.$BgGetPosition ();
                                } else { 
                                    stack5 = stack5.axCallProperty($names[20], [], false);
                                }
                            }
                        }
                        // 9 {3, 0:flash.geom, 0, 3, 0:entities, 2:entities, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.filters, 0:levels, 0:entities.particles, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 0:Box2D.Common.Math, 1:entities:Hero, 5:entities:Hero, 5:entities:Entity}::y
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['y'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgy;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[22]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack6 = temp.$BgUtils;
                        if (stack6 === undefined || typeof stack6 === 'function') {
                            stack6 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['m_scale'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgm_scale;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack5 *= stack6;
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 0::currentMidPosition
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack6 = this.$BgcurrentMidPosition;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['y'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgy;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack5 -= stack6;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 /= 2;
//                        stack6 = 0.95;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(local2, stack2, stack3, stack4, stack5, 0.95);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2, stack2, stack3, stack4, stack5, 0.95);
                                } else { 
                                   stack0.axCallProperty($names[12], [local2, stack2, stack3, stack4, stack5, 0.95], false);
                                }
                            }
                        }
                    case 568:
                        local3 = (local3 | 0) + 1;
                    case 570:
                        stack0 = local3;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::numCircles
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgnumCircles;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 += 2;
                        if (stack1 > local3) { p = 72; continue; };
                    case 582:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgonTop();
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_explosionParticle.js
})