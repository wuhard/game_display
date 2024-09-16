(function anonymous(context
) {
/*
	Index: 164
	Path:  levels/Level::m_exitLevel
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_exitLevel() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
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
                        // 7 0::dPad
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces::VirtualDPad  */ 
                        stack0 = this.$BgdPad;
                        stack1 = null;
                        if (null == stack0) { p = 24; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::dPad
                        //Possible type:7 0:interfaces::VirtualDPad
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces::VirtualDPad  */ 
                        stack0 = this.$BgdPad;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deleteVirtualDPad();
                        } else {
                            // 7 0::deleteVirtualDPad
                            {
                                let t = stack0;
                                const m = t.$BgdeleteVirtualDPad || (t = sec.box(stack0), t.$BgdeleteVirtualDPad);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[0], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::dPad
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces::VirtualDPad  */ 
                        this.$BgdPad = null;
                    case 24:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::LEVEL_TYPE
                        //Possible type:7 0:interfaces::VirtualDPad
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgLEVEL_TYPE;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::SEWER
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgSEWER;
                        if (stack1 != stack0) { p = 49; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::sewerRoutine
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::SewerRoutine  */ 
                        stack0 = this.$BgsewerRoutine;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.destroy();
                        } else {
                            // 7 0::destroy
                            {
                                let t = stack0;
                                const m = t.$Bgdestroy || (t = sec.box(stack0), t.$Bgdestroy);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::sewerRoutine
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::SewerRoutine  */ 
                        this.$BgsewerRoutine = null;
                    case 49:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::scriptManager
                        //Possible type:7 0:levels::SewerRoutine
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::ScriptManager  */ 
                        stack0 = this.$BgscriptManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.destroy();
                        } else {
                            // 7 0::destroy
                            {
                                let t = stack0;
                                const m = t.$Bgdestroy || (t = sec.box(stack0), t.$Bgdestroy);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::scriptManager
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::ScriptManager  */ 
                        this.$BgscriptManager = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::camera
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.geom::Rectangle  */ 
                        this.$Bgcamera = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0:levels::ScriptManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deleteHero();
                        } else {
                            // 7 0::deleteHero
                            {
                                let t = stack0;
                                const m = t.$BgdeleteHero || (t = sec.box(stack0), t.$BgdeleteHero);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:entities::Hero  */ 
                        this.$Bghero = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0:entities::Hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deleteHero();
                        } else {
                            // 7 0::deleteHero
                            {
                                let t = stack0;
                                const m = t.$BgdeleteHero || (t = sec.box(stack0), t.$BgdeleteHero);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:entities::SmallHero  */ 
                        this.$BgsmallHero1 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deleteHero();
                        } else {
                            // 7 0::deleteHero
                            {
                                let t = stack0;
                                const m = t.$BgdeleteHero || (t = sec.box(stack0), t.$BgdeleteHero);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:entities::SmallHero  */ 
                        this.$BgsmallHero2 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::collisionsManager
                        //Possible type:7 0:entities::SmallHero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::CollisionsManager  */ 
                        stack0 = this.$BgcollisionsManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deleteCollisions();
                        } else {
                            // 7 0::deleteCollisions
                            {
                                let t = stack0;
                                const m = t.$BgdeleteCollisions || (t = sec.box(stack0), t.$BgdeleteCollisions);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::collisionsManager
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels.collisions::CollisionsManager  */ 
                        this.$BgcollisionsManager = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::itemsManager
                        //Possible type:7 0:levels.collisions::CollisionsManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.items::ItemsManager  */ 
                        stack0 = this.$BgitemsManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deleteItems();
                        } else {
                            // 7 0::deleteItems
                            {
                                let t = stack0;
                                const m = t.$BgdeleteItems || (t = sec.box(stack0), t.$BgdeleteItems);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[4], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::itemsManager
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels.items::ItemsManager  */ 
                        this.$BgitemsManager = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particlesManager
                        //Possible type:7 0:levels.items::ItemsManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities.particles::ParticlesManager  */ 
                        stack0 = this.$BgparticlesManager;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deleteParticles();
                        } else {
                            // 7 0::deleteParticles
                            {
                                let t = stack0;
                                const m = t.$BgdeleteParticles || (t = sec.box(stack0), t.$BgdeleteParticles);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::particlesManager
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:entities.particles::ParticlesManager  */ 
                        this.$BgparticlesManager = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::cameraNode
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        this.$BgcameraNode = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hud
                        //Possible type:7 0:entities.particles::ParticlesManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces::Hud  */ 
                        stack0 = this.$Bghud;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deleteHud();
                        } else {
                            // 7 0::deleteHud
                            {
                                let t = stack0;
                                const m = t.$BgdeleteHud || (t = sec.box(stack0), t.$BgdeleteHud);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[6], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::hud
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces::Hud  */ 
                        this.$Bghud = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::soundHud
                        //Possible type:7 0:interfaces::Hud
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces::SoundHud  */ 
                        stack0 = this.$BgsoundHud;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.deleteSoundHud();
                        } else {
                            // 7 0::deleteSoundHud
                            {
                                let t = stack0;
                                const m = t.$BgdeleteSoundHud || (t = sec.box(stack0), t.$BgdeleteSoundHud);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::soundHud
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:interfaces::SoundHud  */ 
                        this.$BgsoundHud = null;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::m_world
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.m_world = null;
                        } else {
                            context.setproperty($names[9], null, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::cListener
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::ContactListener  */ 
                        this.$BgcListener = null;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::gameMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['gameMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BggameMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['world'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgworld;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[11]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelStageBitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$BglevelStageBitmap;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::backWorld
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['backWorld'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgbackWorld;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::world
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['world'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgworld;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::_bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack1 = this.$Bg_bitmap;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::gameMovie
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['gameMovie'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BggameMovie;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::container2Bitmap
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$Bgcontainer2Bitmap;
                        stack1 = null;
                        if (null == stack0) { p = 290; continue; };
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
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::container2Bitmap
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::Bitmap  */ 
                        this.$Bgcontainer2Bitmap = null;
                    case 290:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::fixedContainerBitmap
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$BgfixedContainerBitmap;
                        stack1 = null;
                        if (null == stack0) { p = 316; continue; };
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
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::fixedContainerBitmap
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::Bitmap  */ 
                        this.$BgfixedContainerBitmap = null;
                    case 316:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::container1Bitmap
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$Bgcontainer1Bitmap;
                        stack1 = null;
                        if (null == stack0) { p = 342; continue; };
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
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::container1Bitmap
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::Bitmap  */ 
                        this.$Bgcontainer1Bitmap = null;
                    case 342:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::container0Bitmap
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Bitmap  */ 
                        stack0 = this.$Bgcontainer0Bitmap;
                        stack1 = null;
                        if (null == stack0) { p = 368; continue; };
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
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::container0Bitmap
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::Bitmap  */ 
                        this.$Bgcontainer0Bitmap = null;
                    case 368:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::backgroundContainer
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BgbackgroundContainer;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeChild(stack1);
                        } else {
                            // 7 0::removeChild
                            {
                                let t = stack0;
                                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[12], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::backgroundContainer
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BgbackgroundContainer = null;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::gameMovie
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.gameMovie = null;
                        } else {
                            context.setproperty($names[10], null, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::_bitmap
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::Bitmap  */ 
                        this.$Bg_bitmap = null;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::backWorld
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.backWorld = null;
                        } else {
                            context.setproperty($names[13], null, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::levelStageBitmap
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::Bitmap  */ 
                        this.$BglevelStageBitmap = null;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::world
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.world = null;
                        } else {
                            context.setproperty($names[11], null, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        // 7 0:flash.events::Event
                        temp = scope0.findScopeProperty($names[16], true, false);
                        stack1 = temp.$BgEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[16]);
                        }
                        // 7 0::DEACTIVATE
                        //Possible type:7 0:flash.events::Event
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['DEACTIVATE'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgDEACTIVATE;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::focusOutHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[18]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeEventListener(stack1, stack2);
                        } else {
                            // 7 0::removeEventListener
                            {
                                let t = stack0;
                                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[19], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        // 7 0:flash.events::KeyboardEvent
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack1 = temp.$BgKeyboardEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[20]);
                        }
                        // 7 0::KEY_DOWN
                        //Possible type:7 0:flash.events::KeyboardEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['KEY_DOWN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgKEY_DOWN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[21]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::keyDownListener
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[22]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeEventListener(stack1, stack2);
                        } else {
                            // 7 0::removeEventListener
                            {
                                let t = stack0;
                                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[19], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[15]);
                            }
                        }
                        // 7 0:flash.events::KeyboardEvent
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack1 = temp.$BgKeyboardEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[20]);
                        }
                        // 7 0::KEY_UP
                        //Possible type:7 0:flash.events::KeyboardEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['KEY_UP'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgKEY_UP;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[23]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels:Level::keyUpListener
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[24]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeEventListener(stack1, stack2);
                        } else {
                            // 7 0::removeEventListener
                            {
                                let t = stack0;
                                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[19], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0:flash.system::System
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack0 = temp.$BgSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[25]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gc();
                        } else {
                            // 7 0::gc
                            {
                                let t = stack0;
                                const m = t.$Bggc || (t = sec.box(stack0), t.$Bggc);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[26], [], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level/m_exitLevel.js
})