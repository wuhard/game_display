(function anonymous(context
) {
/*
	Index: 167
	Path:  levels/Level::m_initLevel
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const flash_geom__Rectangle_def = context.getTopLevel(14); // flash.geom:Rectangle

    return function compiled_m_initLevel() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::ScriptManager
                        stack1 = scope0.findScopeProperty($names[0], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelStage
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack2 = this.$BglevelStage;
//                        stack3 = this;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:ScriptManager/Object
                        stack1 = context.constructFast(stack1, [stack2, this], $names[0]);
                        // 7 0::scriptManager
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::ScriptManager  */ 
                        this.$BgscriptManager = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.display::MovieClip
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        stack1 = context.constructprop($names[1], stack1, []);
                        // 7 0::backgroundContainer
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BgbackgroundContainer = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::backgroundContainer
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgbackgroundContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::backgroundContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgbackgroundContainer;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::GFX_SCALE
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GFX_SCALE'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGFX_SCALE;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack3 = stack2;
                        local1 = stack3;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = stack2;
                        } else {
                            context.setproperty($names[4], stack2, stack1);
                        }
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = local1;
                        } else {
                            context.setproperty($names[5], local1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::backgroundContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgbackgroundContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::backgroundContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgbackgroundContainer;
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.y = 0;
                        } else {
                            context.setproperty($names[6], 0, stack1);
                        }
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = local1;
                        } else {
                            context.setproperty($names[7], local1, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::gameMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['gameMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BggameMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::gameMovie
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['gameMovie'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BggameMovie;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::GFX_SCALE
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GFX_SCALE'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGFX_SCALE;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack3 = stack2;
                        local1 = stack3;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = stack2;
                        } else {
                            context.setproperty($names[4], stack2, stack1);
                        }
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = local1;
                        } else {
                            context.setproperty($names[5], local1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.display::MovieClip
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        stack1 = context.constructprop($names[1], stack1, []);
                        // 7 0::effectsLayer
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BgeffectsLayer = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::effectsLayer
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgeffectsLayer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::effectsLayer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgeffectsLayer;
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.y = 0;
                        } else {
                            context.setproperty($names[6], 0, stack1);
                        }
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = local1;
                        } else {
                            context.setproperty($names[7], local1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::effectsLayer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgeffectsLayer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::effectsLayer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgeffectsLayer;
//                        stack2 = 0.25;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0.25;// JIT: redundant assigment, value unused
                        local1 = 0.25;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = 0.25;
                        } else {
                            context.setproperty($names[4], 0.25, stack1);
                        }
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = local1;
                        } else {
                            context.setproperty($names[5], local1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::effectsLayer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgeffectsLayer;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[9], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.display::BitmapData
                        stack1 = scope0.findScopeProperty($names[10], true, false);
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[2]);
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
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['HEIGHT'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgHEIGHT;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[12]);
                            }
                        }
//                        stack4 = true;// JIT: redundant assigment, value unused
//                        stack5 = 0;// JIT: redundant assigment, value unused
                        stack1 = context.constructprop($names[10], stack1, [stack2, stack3, true, 0]);
                        // 7 0::_bitmapData
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::BitmapData  */ 
                        this.$Bg_bitmapData = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.display::Bitmap
                        stack1 = scope0.findScopeProperty($names[13], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmapData
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::BitmapData  */ 
                        stack2 = this.$Bg_bitmapData;
                        stack1 = context.constructprop($names[13], stack1, [stack2]);
                        // 7 0::_bitmap
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::Bitmap  */ 
                        this.$Bg_bitmap = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmap
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$Bg_bitmap;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmap
                        //Possible type:7 0:flash.display::Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$Bg_bitmap;
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        local1 = 1;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = 1;
                        } else {
                            context.setproperty($names[4], 1, stack1);
                        }
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = local1;
                        } else {
                            context.setproperty($names[5], local1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmap
                        //Possible type:7 0:flash.display::Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$Bg_bitmap;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmap
                        //Possible type:7 0:flash.display::Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$Bg_bitmap;
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.y = 0;
                        } else {
                            context.setproperty($names[6], 0, stack1);
                        }
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = local1;
                        } else {
                            context.setproperty($names[7], local1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.geom::Rectangle
                        /* GenerateLexImports */
//                        stack1 = flash_geom__Rectangle_def;// JIT: redundant assigment, value unused
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack4 = temp.$BgUtils;
                        if (stack4 === undefined || typeof stack4 === 'function') {
                            stack4 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['WIDTH'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$BgWIDTH;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack5 = temp.$BgUtils;
                        if (stack5 === undefined || typeof stack5 === 'function') {
                            stack5 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::HEIGHT
                        //Possible type:7 0::Utils
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['HEIGHT'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$BgHEIGHT;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[12]);
                            }
                        }
                        stack1 = context.constructprop($names[14], flash_geom__Rectangle_def, [0, 0, stack4, stack5]);
                        // 7 0::camera
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.geom::Rectangle  */ 
                        this.$Bgcamera = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BginitBox2D();
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:entities::Hero
                        stack1 = scope0.findScopeProperty($names[15], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0::scriptManager
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::ScriptManager  */ 
                        stack3 = this.$BgscriptManager;
                        // 7 0::heroInitialXPos
                        //Possible type:7 0:levels::ScriptManager
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['heroInitialXPos'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgheroInitialXPos;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[16]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0::scriptManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::ScriptManager  */ 
                        stack4 = this.$BgscriptManager;
                        // 7 0::heroInitialYPos
                        //Possible type:7 0:levels::ScriptManager
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['heroInitialYPos'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$BgheroInitialYPos;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[17]);
                            }
                        }
                        //JIT: Support fast construct:Hero/Entity/Object
                        stack1 = context.constructFast(stack1, [this, stack3, stack4], $names[15]);
                        // 7 0::hero
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:entities::Hero  */ 
                        this.$Bghero = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:entities::SmallHero
                        stack1 = scope0.findScopeProperty($names[18], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
//                        stack3 = -1000;// JIT: redundant assigment, value unused
//                        stack4 = -1000;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:SmallHero/Entity/Object
                        stack1 = context.constructFast(stack1, [this, -1000, -1000], $names[18]);
                        // 7 0::smallHero1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:entities::SmallHero  */ 
                        this.$BgsmallHero1 = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:entities::SmallHero
                        stack1 = scope0.findScopeProperty($names[18], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
//                        stack3 = -1200;// JIT: redundant assigment, value unused
//                        stack4 = -1000;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:SmallHero/Entity/Object
                        stack1 = context.constructFast(stack1, [this, -1200, -1000], $names[18]);
                        // 7 0::smallHero2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:entities::SmallHero  */ 
                        this.$BgsmallHero2 = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels.collisions::CollisionsManager
                        stack1 = scope0.findScopeProperty($names[19], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::scriptManager
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::ScriptManager  */ 
                        stack2 = this.$BgscriptManager;
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels::ScriptManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['levelCollisions'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BglevelCollisions;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[20]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:CollisionsManager/Object
                        stack1 = context.constructFast(stack1, [stack2, this], $names[19]);
                        // 7 0::collisionsManager
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels.collisions::CollisionsManager  */ 
                        this.$BgcollisionsManager = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels.items::ItemsManager
                        stack1 = scope0.findScopeProperty($names[21], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::scriptManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::ScriptManager  */ 
                        stack2 = this.$BgscriptManager;
                        // 7 0::levelItems
                        //Possible type:7 0:levels::ScriptManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['levelItems'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BglevelItems;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[22]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:ItemsManager/Object
                        stack1 = context.constructFast(stack1, [stack2, this], $names[21]);
                        // 7 0::itemsManager
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels.items::ItemsManager  */ 
                        this.$BgitemsManager = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:entities.particles::ParticlesManager
                        stack1 = scope0.findScopeProperty($names[23], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:ParticlesManager/Object
                        stack1 = context.constructFast(stack1, [this], $names[23]);
                        // 7 0::particlesManager
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:entities.particles::ParticlesManager  */ 
                        this.$BgparticlesManager = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::sewerRoutine
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::SewerRoutine  */ 
                        this.$BgsewerRoutine = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::LEVEL_TYPE
                        //Possible type:7 0:flash.display::Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgLEVEL_TYPE;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::SEWER
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgSEWER;
                        if (stack1 != stack0) { p = 420; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::SewerRoutine
                        stack1 = scope0.findScopeProperty($names[24], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:SewerRoutine/Object
                        stack1 = context.constructFast(stack1, [this], $names[24]);
                        // 7 0::sewerRoutine
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::SewerRoutine  */ 
                        this.$BgsewerRoutine = stack1;
                    case 420:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.onTop();
                        } else {
                            // 7 0::onTop
                            {
                                let t = stack0;
                                const m = t.$BgonTop || (t = sec.box(stack0), t.$BgonTop);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[25], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0:levels::SewerRoutine
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack1 = this.$Bghero;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack1;
                                const m = t.$BggetMidPosition || (t = sec.box(stack1), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BggetMidPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[26], [], false);
                                }
                            }
                        }
                        // 7 0::cameraNode
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        this.$BgcameraNode = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgRenderLayers();
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[27]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::backgroundContainer
                        //Possible type:7 0:entities::Hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgbackgroundContainer;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[28], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::container0Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$Bgcontainer0Bitmap;
                        stack1 = null;
                        if (null == stack0) { p = 480; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::backgroundContainer
                        //Possible type:7 0:flash.display::Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgbackgroundContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::container0Bitmap
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$Bgcontainer0Bitmap;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[28], [stack1], false);
                                }
                            }
                        }
                    case 480:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::container1Bitmap
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$Bgcontainer1Bitmap;
                        stack1 = null;
                        if (null == stack0) { p = 501; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::backgroundContainer
                        //Possible type:7 0:flash.display::Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgbackgroundContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::container1Bitmap
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$Bgcontainer1Bitmap;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[28], [stack1], false);
                                }
                            }
                        }
                    case 501:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::fixedContainerBitmap
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$BgfixedContainerBitmap;
                        stack1 = null;
                        if (null == stack0) { p = 522; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::backgroundContainer
                        //Possible type:7 0:flash.display::Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgbackgroundContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::fixedContainerBitmap
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$BgfixedContainerBitmap;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[28], [stack1], false);
                                }
                            }
                        }
                    case 522:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::container2Bitmap
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$Bgcontainer2Bitmap;
                        stack1 = null;
                        if (null == stack0) { p = 543; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::backgroundContainer
                        //Possible type:7 0:flash.display::Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgbackgroundContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::container2Bitmap
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$Bgcontainer2Bitmap;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[28], [stack1], false);
                                }
                            }
                        }
                    case 543:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[27]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::gameMovie
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['gameMovie'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BggameMovie;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[28], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[29]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$Bg_bitmap;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[28], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[29]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::backWorld
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['backWorld'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgbackWorld;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[30]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[28], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[29]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelStageBitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$BglevelStageBitmap;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[28], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::gameMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['gameMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BggameMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgworld;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[29]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[28], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[29]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$Bg_bitmap;
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setChildIndex(stack1, 0);
                        } else {
                            // 7 0::setChildIndex
                            {
                                let t = stack0;
                                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, 0);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1, 0], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[29]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::backWorld
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['backWorld'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgbackWorld;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[30]);
                            }
                        }
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setChildIndex(stack1, 0);
                        } else {
                            // 7 0::setChildIndex
                            {
                                let t = stack0;
                                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, 0);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1, 0], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[29]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelStageBitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$BglevelStageBitmap;
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setChildIndex(stack1, 0);
                        } else {
                            // 7 0::setChildIndex
                            {
                                let t = stack0;
                                const m = t.$BgsetChildIndex || (t = sec.box(stack0), t.$BgsetChildIndex);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, 0);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1, 0], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:interfaces::Hud
                        stack1 = scope0.findScopeProperty($names[32], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:Hud/Object
                        stack1 = context.constructFast(stack1, [this], $names[32]);
                        // 7 0::hud
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces::Hud  */ 
                        this.$Bghud = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:interfaces::SoundHud
                        stack1 = scope0.findScopeProperty($names[33], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:SoundHud/Object
                        stack1 = context.constructFast(stack1, [this], $names[33]);
                        // 7 0::soundHud
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces::SoundHud  */ 
                        this.$BgsoundHud = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::soundHud
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces::SoundHud  */ 
                        stack0 = this.$BgsoundHud;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.showPause();
                        } else {
                            // 7 0::showPause
                            {
                                let t = stack0;
                                const m = t.$BgshowPause || (t = sec.box(stack0), t.$BgshowPause);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[34], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::soundHud
                        //Possible type:7 0:interfaces::SoundHud
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces::SoundHud  */ 
                        stack0 = this.$BgsoundHud;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.enablePause();
                        } else {
                            // 7 0::enablePause
                            {
                                let t = stack0;
                                const m = t.$BgenablePause || (t = sec.box(stack0), t.$BgenablePause);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[35], [], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::IS_ON_MOBILE
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_ON_MOBILE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_ON_MOBILE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[36]);
                            }
                        }
                        if (!stack0) { p = 735; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:interfaces::VirtualDPad
                        stack1 = scope0.findScopeProperty($names[37], true, false);
//                        stack2 = this;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:VirtualDPad/Object
                        stack1 = context.constructFast(stack1, [this], $names[37]);
                        // 7 0::dPad
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces::VirtualDPad  */ 
                        this.$BgdPad = stack1;
                        { p = 740; continue; };
                    case 735:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::dPad
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces::VirtualDPad  */ 
                        this.$BgdPad = null;
                    case 740:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgresetFocus();
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[38]);
                            }
                        }
                        // 7 0:flash.events::Event
                        temp = scope0.findScopeProperty($names[39], true, false);
                        stack1 = temp.$BgEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[39]);
                        }
                        // 7 0::DEACTIVATE
                        //Possible type:7 0:flash.events::Event
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['DEACTIVATE'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgDEACTIVATE;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[40]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::focusOutHandler
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[41]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[42], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[38]);
                            }
                        }
                        // 7 0:flash.events::KeyboardEvent
                        temp = scope0.findScopeProperty($names[43], true, false);
                        stack1 = temp.$BgKeyboardEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[43]);
                        }
                        // 7 0::KEY_DOWN
                        //Possible type:7 0:flash.events::KeyboardEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['KEY_DOWN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgKEY_DOWN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[44]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::keyDownListener
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[45]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[42], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[38]);
                            }
                        }
                        // 7 0:flash.events::KeyboardEvent
                        temp = scope0.findScopeProperty($names[43], true, false);
                        stack1 = temp.$BgKeyboardEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[43]);
                        }
                        // 7 0::KEY_UP
                        //Possible type:7 0:flash.events::KeyboardEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['KEY_UP'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgKEY_UP;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[46]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::keyUpListener
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[47]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[42], [stack1, stack2], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level/m_initLevel.js
})