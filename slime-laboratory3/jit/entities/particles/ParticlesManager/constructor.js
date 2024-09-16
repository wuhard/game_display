(function anonymous(context
) {
/*
	Index: 661
	Path:  entities/particles/ParticlesManager::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Level */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let stack7 = undefined;
        let stack8 = undefined;
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
                        stack0 = this;
                        context.savedScope.superConstructor.call(this, );
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = local1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::particles
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$Bgparticles = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 512;// JIT: redundant assigment, value unused
                        // 7 0::particlesAmount
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgparticlesAmount = 512;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::lastUsedParticle
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BglastUsedParticle = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        { p = 73; continue; };
                    case 42:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::particles
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$Bgparticles;
                        // 7 0:entities.particles::Particle
                        stack1 = scope0.findScopeProperty($names[1], true, false);
//                        stack2 = -1;// JIT: redundant assigment, value unused
//                        stack3 = -1;// JIT: redundant assigment, value unused
//                        stack4 = -1;// JIT: redundant assigment, value unused
//                        stack5 = -1;// JIT: redundant assigment, value unused
//                        stack6 = -1;// JIT: redundant assigment, value unused
//                        stack7 = -1;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack8 = local1;
                        //JIT: Support fast construct:Particle/Object
                        stack1 = context.constructFast(stack1, [-1, -1, -1, -1, -1, -1, local1], $names[1]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(stack1);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[2], [stack1], false);
                                }
                            }
                        }
                        local2 = (local2 | 0) + 1;
                    case 73:
                        stack0 = local2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::particlesAmount
                        //Possible type:7 0:entities.particles::Particle
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgparticlesAmount;
                        if (stack1 > local2) { p = 42; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/ParticlesManager/constructor.js
})