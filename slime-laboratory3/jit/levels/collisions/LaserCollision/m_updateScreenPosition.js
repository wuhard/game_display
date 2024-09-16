(function anonymous(context
) {
/*
	Index: 1629
	Path:  levels/collisions/LaserCollision::m_updateScreenPosition
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const flash_geom__Point_def = context.getTopLevel(6); // flash.geom:Point
             const __Math = context.getTopLevel(17)['$BgMath']; // :Math

    return function compiled_m_updateScreenPosition(local1 /* Rectangle */) {
        // Possible use a real "this"
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
        let stack6 = undefined;
        let stack7 = undefined;
        let stack8 = undefined;
        let stack9 = undefined;
        let stack10 = undefined;
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
                        local4 = null;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        stack2 = context.savedScope.global.object;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgxPos;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglevelCollisionSprite;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        stack2 = context.savedScope.global.object;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack3 = this.$BgyPos;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::effectsLayer
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['effectsLayer'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgeffectsLayer;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::graphics
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = 4;// JIT: redundant assigment, value unused
//                        stack2 = 15748958;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.lineStyle(4, 15748958, 1);
                        } else {
                            // 7 0::lineStyle
                            {
                                let t = stack0;
                                const m = t.$BglineStyle || (t = sec.box(stack0), t.$BglineStyle);
                                if( typeof m === "function" ) { 
                                    m.call(t, 4, 15748958, 1);
                                } else { 
                                   stack0.axCallProperty($names[5], [4, 15748958, 1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::color_switch
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack1 = this.$Bgcolor_switch;
                        stack1 = !stack1;
                        // 7 2:levels.collisions::color_switch
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgcolor_switch = (!!stack1);
                        // 7 0:flash.geom::Point
                        /* GenerateLexImports */
//                        stack0 = flash_geom__Point_def;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p1
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$Bgp1;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::x
                        //Possible type:null
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack2 = this.$Bgp1;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::y
                        //Possible type:null
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack2 *= stack3;
                        //JIT: Support fast construct:Point/Object
                        stack0 = context.constructFast(flash_geom__Point_def, [stack1, stack2], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local2 = stack0;
                        // 7 0:flash.geom::Point
                        /* GenerateLexImports */
//                        stack0 = flash_geom__Point_def;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$Bgp2;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::lambda
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bglambda;
                        stack1 *= stack2;
                        stack2 = 1;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::lambda
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bglambda;
                        stack2 -= stack3;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p1
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack3 = this.$Bgp1;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::x
                        //Possible type:null
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack1 *= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$Bgp2;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::lambda
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bglambda;
                        stack2 *= stack3;
                        stack3 = 1;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::lambda
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$Bglambda;
                        stack3 -= stack4;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p1
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack4 = this.$Bgp1;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::y
                        //Possible type:null
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['y'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack3 *= stack4;
                        stack2 += stack3;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack2 *= stack3;
                        //JIT: Support fast construct:Point/Object
                        stack0 = context.constructFast(flash_geom__Point_def, [stack1, stack2], $names[6]);
                        //IR: Drop coerce, reason: redundant
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::laserParticleSprite
                        //Possible type:7 0:flash.geom::Point
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::LaserParticleSprite  */ 
                        stack0 = this.$BglaserParticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::laserParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::LaserParticleSprite  */ 
                        stack1 = this.$BglaserParticleSprite;
//                        stack2 = 1.5;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 1.5;// JIT: redundant assigment, value unused
                        local5 = 1.5;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = 1.5;
                        } else {
                            context.setproperty($names[11], 1.5, stack1);
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = local5;
                        } else {
                            context.setproperty($names[12], local5, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::laserParticleSprite
                        //Possible type:7 0::LaserParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::LaserParticleSprite  */ 
                        stack0 = this.$BglaserParticleSprite;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:7 0::LaserParticleSprite
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack1 = local3['x'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::laserParticleSprite
                        //Possible type:7 0::LaserParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::LaserParticleSprite  */ 
                        stack0 = this.$BglaserParticleSprite;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack1 = local3['y'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::laserParticleSprite
                        //Possible type:7 0::LaserParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::LaserParticleSprite  */ 
                        stack0 = this.$BglaserParticleSprite;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::laserParticleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::LaserParticleSprite  */ 
                        stack1 = this.$BglaserParticleSprite;
                        // 7 0::visible
                        //Possible type:7 0::LaserParticleSprite
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['visible'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgvisible;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
                        stack1 = !stack1;
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = stack1;
                        } else {
                            context.setproperty($names[13], stack1, stack0);
                        }
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.containsPoint(local2);
                        } else {
                            // 7 0::containsPoint
                            {
                                let t = local1;
                                const m = t.$BgcontainsPoint || (t = sec.box(local1), t.$BgcontainsPoint);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgcontainsPoint (local2);
                                } else { 
                                    stack0 = local1.axCallProperty($names[14], [local2], false);
                                }
                            }
                        }
                        stack0 = !stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 257; continue; };
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack0 = local1;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack0 = local1.containsPoint(local3);
                        } else {
                            // 7 0::containsPoint
                            {
                                let t = local1;
                                const m = t.$BgcontainsPoint || (t = sec.box(local1), t.$BgcontainsPoint);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgcontainsPoint (local3);
                                } else { 
                                    stack0 = local1.axCallProperty($names[14], [local3], false);
                                }
                            }
                        }
                        stack0 = !stack0;
                    case 257:
                        if (!stack0) { p = 265; continue; };
                        //JIT: Emit inline return
                        return;
                    case 265:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::IS_ANDROID
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_ANDROID'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_ANDROID;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                        stack1 = stack0;
                        if (!stack1) { p = 287; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::LOW_RES
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LOW_RES'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLOW_RES;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 287:
                        if (!stack0) { p = 449; continue; };
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgrandom ();
                                } else { 
                                    stack0 = __Math.axCallProperty($names[18], [], false);
                                }
                            }
                        }
//                        stack1 = 100;// JIT: redundant assigment, value unused
                        stack0 *= 100;
                        stack1 = 60;
                        if (!(60 < stack0)) { p = 449; continue; };
                        // 7 0::BurnParticleSprite
                        stack0 = scope0.findScopeProperty($names[19], true, false);
                        stack0 = context.constructprop($names[19], stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[20], true, false);
                            _e || console.warn('[m_updateScreenPosition] Coerce Type not found:', "MovieClip")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local4 = stack1;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgrandom ();
                                } else { 
                                    stack3 = __Math.axCallProperty($names[18], [], false);
                                }
                            }
                        }
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 *= 4;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
//                        stack2 = 0.25;// JIT: redundant assigment, value unused
                        stack1 *= 0.25;
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.alpha = stack1;
                        } else {
                            context.setproperty($names[21], stack1, stack0);
                        }
//                        stack0 = local4;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgrandom ();
                                } else { 
                                    stack2 = __Math.axCallProperty($names[18], [], false);
                                }
                            }
                        }
//                        stack3 = 0.4;// JIT: redundant assigment, value unused
                        stack2 *= 0.4;
//                        stack3 = 0.8;// JIT: redundant assigment, value unused
                        stack2 += 0.8;
                        stack3 = stack2;
                        local5 = stack3;
                        // 7 0::scaleY
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.scaleY = stack2;
                        } else {
                            context.setproperty($names[11], stack2, local4);
                        }
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])){
                            local4.scaleX = local5;
                        } else {
                            context.setproperty($names[12], local5, local4);
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
                                stack0 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack1 = local4;// JIT: redundant assigment, value unused
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:7 0::Math
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack2 = local3['x'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgrandom ();
                                } else { 
                                    stack3 = __Math.axCallProperty($names[18], [], false);
                                }
                            }
                        }
//                        stack4 = 4;// JIT: redundant assigment, value unused
                        stack3 *= 4;
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 -= 2;
                        stack2 += stack3;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        // 7 0::y
                        //Possible type:7 0::Math
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack3 = local3['y'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack4 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack4 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack4 = t.$Bgrandom ();
                                } else { 
                                    stack4 = __Math.axCallProperty($names[18], [], false);
                                }
                            }
                        }
//                        stack5 = 2;// JIT: redundant assigment, value unused
                        stack4 *= 2;
                        stack4--;
                        stack3 += stack4;
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack5 = 0;// JIT: redundant assigment, value unused
//                        stack6 = 0.8;// JIT: redundant assigment, value unused
//                        stack7 = true;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack8 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack8 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack8 = t.$Bgrandom ();
                                } else { 
                                    stack8 = __Math.axCallProperty($names[18], [], false);
                                }
                            }
                        }
//                        stack9 = 0.2;// JIT: redundant assigment, value unused
                        stack8 *= 0.2;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack9 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack9 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack9 = t.$Bgrandom ();
                                } else { 
                                    stack9 = __Math.axCallProperty($names[18], [], false);
                                }
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack10 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack10 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack10 = temp.$BgPI;
                            if (stack10 === undefined || typeof stack10 === 'function') {
                                stack10 = temp.axGetProperty($names[23]);
                            }
                        }
                        stack9 *= stack10;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(local4, stack2, stack3, 0, 0, 0.8, true, stack8, stack9);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, local4, stack2, stack3, 0, 0, 0.8, true, stack8, stack9);
                                } else { 
                                   stack0.axCallProperty($names[24], [local4, stack2, stack3, 0, 0, 0.8, true, stack8, stack9], false);
                                }
                            }
                        }
                    case 449:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::effectsLayer
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['effectsLayer'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgeffectsLayer;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::graphics
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p1
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack1 = this.$Bgp1;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::x
                        //Possible type:null
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack1 *= stack2;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack2 = this.$Bgp1;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::y
                        //Possible type:null
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack2 *= stack3;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2 -= stack3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.moveTo(stack1, stack2);
                        } else {
                            // 7 0::moveTo
                            {
                                let t = stack0;
                                const m = t.$BgmoveTo || (t = sec.box(stack0), t.$BgmoveTo);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[25], [stack1, stack2], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::effectsLayer
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['effectsLayer'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgeffectsLayer;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::graphics
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['graphics'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggraphics;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$Bgp2;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::lambda
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bglambda;
                        stack1 *= stack2;
                        stack2 = 1;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::lambda
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bglambda;
                        stack2 -= stack3;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p1
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack3 = this.$Bgp1;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::x
                        //Possible type:null
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack2 *= stack3;
                        stack1 += stack2;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['m_scale'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgm_scale;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack1 *= stack2;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack2 = this.$Bgp2;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::lambda
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack3 = this.$Bglambda;
                        stack2 *= stack3;
                        stack3 = 1;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::lambda
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$Bglambda;
                        stack3 -= stack4;
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 2:levels.collisions::p1
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: null  */ 
                        stack4 = this.$Bgp1;
                        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Collision.Shapes, 0, 0:Box2D.Common.Math, 2:levels.collisions, 0:levels, 0:Box2D.Collision, 3, 0:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.events, 0:flash.geom, 0:entities, 0:Box2D.Dynamics.Joints, 0:Box2D.Dynamics.Contacts, 1:levels.collisions:LaserCollision, 5:levels.collisions:LaserCollision, 5:levels.collisions:LevelCollision}::y
                        //Possible type:null
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['y'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack3 *= stack4;
                        stack2 += stack3;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::m_scale
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['m_scale'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgm_scale;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack2 *= stack3;
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2 -= stack3;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.lineTo(stack1, stack2);
                        } else {
                            // 7 0::lineTo
                            {
                                let t = stack0;
                                const m = t.$BglineTo || (t = sec.box(stack0), t.$BglineTo);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[26], [stack1, stack2], false);
                                }
                            }
                        }
                    case 593:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/LaserCollision/m_updateScreenPosition.js
})