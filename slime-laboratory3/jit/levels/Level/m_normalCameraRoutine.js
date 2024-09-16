(function anonymous(context
) {
/*
	Index: 176
	Path:  levels/Level::m_normalCameraRoutine
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(12)['$BgMath']; // :Math

    return function compiled_m_normalCameraRoutine() {
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local1 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local4 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local5 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        // 7 0::dead
                        //Possible type:7 0:entities::Hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['dead'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdead;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        if (!stack0) { p = 28; continue; };
                        return;
                    case 28:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::SPLITTED_FLAG
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgSPLITTED_FLAG;
                        if (!stack0) { p = 100; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack0;
                                const m = t.$BggetMidPosition || (t = sec.box(stack0), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetMidPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_normalCameraRoutine] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local4 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack0;
                                const m = t.$BggetMidPosition || (t = sec.box(stack0), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetMidPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_normalCameraRoutine] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local5 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[2], true, false);
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack1 = local4['x'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack2 = local5;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack2 = local5['x'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 += stack2;
//                        stack2 = 2;// JIT: redundant assigment, value unused
                        stack1 /= 2;
//                        stack2 = local4;// JIT: redundant assigment, value unused
                        // 7 0::y
                        //Possible type:undefined
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
                            stack2 = local4['y'];
                        } else {
                            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack3 = local5;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack3 = local5['y'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack2 += stack3;
//                        stack3 = 2;// JIT: redundant assigment, value unused
                        stack2 /= 2;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[2]);
                        //IR: Drop coerce, reason: redundant
                        local1 = stack0;
                        { p = 111; continue; };
                    case 100:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack0;
                                const m = t.$BggetMidPosition || (t = sec.box(stack0), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BggetMidPosition ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[m_normalCameraRoutine] Coerce Type not found:', "b2Vec2")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local1 = stack0;
                    case 111:
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[2], true, false);
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$BgcameraNode;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = local1;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack3 = this.$BgcameraNode;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack2 -= stack3;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraYOffset
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack3 = this.$BgcameraYOffset;
                        stack2 += stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[2]);
                        //IR: Drop coerce, reason: redundant
                        local2 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['x'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack2 = 0.2;// JIT: redundant assigment, value unused
                        stack1 *= 0.2;
                        // 7 0::x
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.x = stack1;
                        } else {
                            context.setproperty($names[3], stack1, local2);
                        }
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['y'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack2 = 0.2;// JIT: redundant assigment, value unused
                        stack1 *= 0.2;
                        // 7 0::y
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.y = stack1;
                        } else {
                            context.setproperty($names[4], stack1, local2);
                        }
//                        stack0 = 6;// JIT: redundant assigment, value unused
                        local3 = 6;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        // 7 0::IS_FROST
                        //Possible type:7 0:entities::Hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_FROST'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_FROST;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        if (!stack0) { p = 187; continue; };
//                        stack0 = 8;// JIT: redundant assigment, value unused
                        local3 = 8;
                    case 187:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['CurrentLevel'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgCurrentLevel;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack1 = 10;
                        stack0 = stack0 == 10;
                        stack1 = stack0;
                        if (stack1) { p = 211; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['CurrentLevel'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgCurrentLevel;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack1 = 15;
                        stack0 = stack0 == 15;
                    case 211:
                        if (!stack0) { p = 218; continue; };
//                        stack0 = 20;// JIT: redundant assigment, value unused
                        local3 = 20;
                    case 218:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['x'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 = local3;
                        if (!(local3 < stack0)) { p = 236; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.x = local3;
                        } else {
                            context.setproperty($names[3], local3, local2);
                        }
                        { p = 252; continue; };
                    case 236:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['x'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 = local3;
                        stack1 = -local3;
                        if (!(stack1 > stack0)) { p = 252; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        stack1 = local3;
                        stack1 = -local3;
                        // 7 0::x
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.x = stack1;
                        } else {
                            context.setproperty($names[3], stack1, local2);
                        }
                    case 252:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['y'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = local3;
                        if (!(local3 < stack0)) { p = 270; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.y = local3;
                        } else {
                            context.setproperty($names[4], local3, local2);
                        }
                        { p = 286; continue; };
                    case 270:
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['y'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = local3;
                        stack1 = -local3;
                        if (!(stack1 > stack0)) { p = 286; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        stack1 = local3;
                        stack1 = -local3;
                        // 7 0::y
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.y = stack1;
                        } else {
                            context.setproperty($names[4], stack1, local2);
                        }
                    case 286:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgcameraNode;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgcameraNode;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack2 = local2['x'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgcameraNode;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgcameraNode;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack2 = local2['y'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 += stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack3 = this.$BgcameraNode;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack4 = this.$Bgcamera;
                        // 7 0::width
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
                        stack3 -= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack3 = this.$BgcameraNode;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack4 = this.$Bgcamera;
                        // 7 0::height
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['height'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgheight;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 /= 2;
                        stack3 -= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::LEVEL_TYPE
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgLEVEL_TYPE;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::SEWER
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgSEWER;
                        if (stack1 != stack0) { p = 416; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        stack1 = 320;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['WIDTH'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgWIDTH;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack1 -= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                    case 416:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::IS_SHAKING
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_SHAKING;
                        if (!stack0) { p = 499; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
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
                                    stack1 = __Math.axCallProperty($names[13], [], false);
                                }
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::shake_power
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgshake_power;
                        stack1 *= stack2;
                        // 7 1:levels:Level::shake_offsetX
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgshake_offsetX = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
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
                                    stack1 = __Math.axCallProperty($names[13], [], false);
                                }
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::shake_power
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgshake_power;
                        stack1 *= stack2;
                        // 7 1:levels:Level::shake_offsetY
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgshake_offsetY = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::shake_power
                        //Possible type:7 0::Math
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgshake_power;
//                        stack2 = 0.8;// JIT: redundant assigment, value unused
                        stack1 *= 0.8;
                        // 7 1:levels:Level::shake_power
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgshake_power = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::shake_power
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgshake_power;
                        stack1 = 0.1;
                        if (!(0.1 >= stack0)) { p = 499; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::IS_SHAKING
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_SHAKING = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        local6 = 0;
                        // 7 1:levels:Level::shake_offsetY
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgshake_offsetY = 0;
//                        stack1 = local6;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 1:levels:Level::shake_offsetX
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgshake_offsetX = (+local6);
                    case 499:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::shake_offsetX
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgshake_offsetX;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::shake_offsetY
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgshake_offsetY;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        // 7 0::width
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['width'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgwidth;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack0 += stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraRightMargin
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgcameraRightMargin;
                        if (!(stack1 < stack0)) { p = 588; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraRightMargin
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$BgcameraRightMargin;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack4 = this.$Bgcamera;
                        // 7 0::width
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack3 -= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        { p = 619; continue; };
                    case 588:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraLeftMargin
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$BgcameraLeftMargin;
                        if (!(stack1 > stack0)) { p = 619; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraLeftMargin
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$BgcameraLeftMargin;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                    case 619:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 645; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = 0;
                        } else {
                            context.setproperty($names[3], 0, stack0);
                        }
                        { p = 692; continue; };
                    case 645:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::x
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        // 7 0::width
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['width'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgwidth;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack0 += stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::LEVEL_WIDTH
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$BgLEVEL_WIDTH;
                        if (!(stack1 < stack0)) { p = 692; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::LEVEL_WIDTH
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack3 = this.$BgLEVEL_WIDTH;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack4 = this.$Bgcamera;
                        // 7 0::width
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack3 -= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                    case 692:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::ceilingYPos
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgceilingYPos;
                        if (!(stack1 > stack0)) { p = 722; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::ceilingYPos
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgceilingYPos;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
                        //JIT: Emit inline return
                        return;
                    case 722:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0:flash.geom::Rectangle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::y
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgcamera;
                        // 7 0::height
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['height'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgheight;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack0 += stack1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::floorYPos
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgfloorYPos;
                        //JIT: Emit inline return
                        if (!(stack1 < stack0)) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        stack2 = context.savedScope.global.object;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::floorYPos
                        //Possible type:null
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack3 = this.$BgfloorYPos;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack4 = this.$Bgcamera;
                        // 7 0::height
                        //Possible type:7 0:flash.geom::Rectangle
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['height'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgheight;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack3 -= stack4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
                    case 769:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level/m_normalCameraRoutine.js
})