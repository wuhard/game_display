(function anonymous(context
) {
/*
	Index: 177
	Path:  levels/Level::m_checkpointCameraRoutine
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_checkpointCameraRoutine() {
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
//                        stack0 = false;// JIT: redundant assigment, value unused
                        local1 = false;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[0], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::collisionsManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::CollisionsManager  */ 
                        stack1 = this.$BgcollisionsManager;
                        // 7 0::currentCheckpoint
                        //Possible type:7 0:levels.collisions::CollisionsManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['currentCheckpoint'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcurrentCheckpoint;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::xPos
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['xPos'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgxPos;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack2 = 24;// JIT: redundant assigment, value unused
                        stack1 += 24;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::collisionsManager
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::CollisionsManager  */ 
                        stack2 = this.$BgcollisionsManager;
                        // 7 0::currentCheckpoint
                        //Possible type:7 0:levels.collisions::CollisionsManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['currentCheckpoint'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgcurrentCheckpoint;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::yPos
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['yPos'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgyPos;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[3]);
                            }
                        }
//                        stack3 = 16;// JIT: redundant assigment, value unused
                        stack2 -= 16;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
                        //IR: Drop coerce, reason: redundant
                        local2 = stack0;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack0 = scope0.findScopeProperty($names[0], true, false);
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack1 = local2['x'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
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
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 -= stack2;
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack2 = local2['y'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[5]);
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
                                stack3 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack2 -= stack3;
                        //JIT: Support fast construct:b2Vec2/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
                        //IR: Drop coerce, reason: redundant
                        local3 = stack0;
                        stack0 = 10;
                        stack0 = +10;
                        local4 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgxVel;
                        stack1 = local4;
                        if (!(local4 < stack0)) { p = 95; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxVel = (+local4);
                        { p = 113; continue; };
                    case 95:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::xVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgxVel;
                        stack1 = local4;
                        stack1 = -local4;
                        if (!(stack1 > stack0)) { p = 113; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = local4;
                        stack1 = -local4;
                        // 7 0::xVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgxVel = (+stack1);
                    case 113:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyVel;
                        stack1 = local4;
                        if (!(local4 < stack0)) { p = 133; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+local4);
                        { p = 151; continue; };
                    case 133:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$BgyVel;
                        stack1 = local4;
                        stack1 = -local4;
                        if (!(stack1 > stack0)) { p = 151; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = local4;
                        stack1 = -local4;
                        // 7 0::yVel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgyVel = (+stack1);
                    case 151:
//                        stack0 = false;// JIT: redundant assigment, value unused
                        local5 = false;
//                        stack0 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
                           stack0 = local3.Length();
                        } else {
                            // 7 0::Length
                            {
                                let t = local3;
                                const m = t.$BgLength || (t = sec.box(local3), t.$BgLength);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgLength ();
                                } else { 
                                    stack0 = local3.axCallProperty($names[6], [], false);
                                }
                            }
                        }
                        stack1 = 50;
                        if (!(50 > stack0)) { p = 200; continue; };
//                        stack0 = true;// JIT: redundant assigment, value unused
                        local5 = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::LEVEL_TYPE
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgLEVEL_TYPE;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::SEWER
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgSEWER;
                        if (stack1 != stack0) { p = 198; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::sewerRoutine
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::SewerRoutine  */ 
                        stack0 = this.$BgsewerRoutine;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.isCameraCentered();
                        } else {
                            // 7 0::isCameraCentered
                            {
                                let t = stack0;
                                const m = t.$BgisCameraCentered || (t = sec.box(stack0), t.$BgisCameraCentered);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgisCameraCentered ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        if (!stack0) { p = 194; continue; };
//                        stack0 = true;// JIT: redundant assigment, value unused
                        local1 = true;
                    case 194:
                        { p = 200; continue; };
                    case 198:
//                        stack0 = true;// JIT: redundant assigment, value unused
                        local1 = true;
                    case 200:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgcameraNode;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        //Possible type:7 0::int
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
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack2 = local3['x'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack3 = 0.2;// JIT: redundant assigment, value unused
                        stack2 *= 0.2;
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
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
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
                            stack2 = local3['y'];
                        } else {
                            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack3 = 0.2;// JIT: redundant assigment, value unused
                        stack2 *= 0.2;
                        stack1 += stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
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
                        //Possible type:undefined
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
                                stack3 = temp.axGetProperty($names[4]);
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
                            context.setproperty($names[4], stack1, stack0);
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
                                stack3 = temp.axGetProperty($names[5]);
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
                            context.setproperty($names[5], stack1, stack0);
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
                        if (stack1 != stack0) { p = 336; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
                        stack1 = 320;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[11]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['WIDTH'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgWIDTH;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[12]);
                            }
                        }
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack1 -= stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
                    case 336:
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
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 362; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack0 = this.$Bgcamera;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = 0;
                        } else {
                            context.setproperty($names[4], 0, stack0);
                        }
                        { p = 409; continue; };
                    case 362:
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
                                stack0 = temp.axGetProperty($names[4]);
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
                        if (!(stack1 < stack0)) { p = 409; continue; };
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
                        //Possible type:undefined
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
                            context.setproperty($names[4], stack1, stack0);
                        }
                    case 409:
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
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::ceilingYPos
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgceilingYPos;
                        if (!(stack1 > stack0)) { p = 439; continue; };
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
                            context.setproperty($names[5], stack1, stack0);
                        }
                        { p = 486; continue; };
                    case 439:
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
                                stack0 = temp.axGetProperty($names[5]);
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
                        if (!(stack1 < stack0)) { p = 486; continue; };
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
                            context.setproperty($names[5], stack1, stack0);
                        }
                    case 486:
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
                        stack0 = stack0 == stack1;
                        stack1 = stack0;
                        if (!stack1) { p = 505; continue; };
                        stack0 = local5;
                        stack1 = false;
                        stack0 = local5 == false;
                    case 505:
                        if (!stack0) { p = 517; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::sewerRoutine
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::SewerRoutine  */ 
                        stack0 = this.$BgsewerRoutine;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateCamera();
                        } else {
                            // 7 0::updateCamera
                            {
                                let t = stack0;
                                const m = t.$BgupdateCamera || (t = sec.box(stack0), t.$BgupdateCamera);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[13], [], false);
                                }
                            }
                        }
                    case 517:
                        stack0 = local1;
                        stack0 = !!local1;
                        stack1 = stack0;
                        if (!stack1) { p = 531; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::checkpointLightAnimation
                        //Possible type:7 0:levels::SewerRoutine
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgcheckpointLightAnimation;
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 531:
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::checkpointLightAnimation
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgcheckpointLightAnimation = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::collisionsManager
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::CollisionsManager  */ 
                        stack0 = this.$BgcollisionsManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.lightUpCheckpoint();
                        } else {
                            // 7 0::lightUpCheckpoint
                            {
                                let t = stack0;
                                const m = t.$BglightUpCheckpoint || (t = sec.box(stack0), t.$BglightUpCheckpoint);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[14], [], false);
                                }
                            }
                        }
                    case 548:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level/m_checkpointCameraRoutine.js
})