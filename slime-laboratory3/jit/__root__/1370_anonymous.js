(function anonymous(context
) {
/*
	Index: 198
	Path:  __root__/1370_anonymous::anonymous
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
        // 7 0::IsStandingState
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::IsStandingState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IsStandingState = 0;
        } else {
            context.setproperty($names[0], 0, stack0);
        }
        // 7 0::IsWalkingState
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::IsWalkingState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IsWalkingState = 1;
        } else {
            context.setproperty($names[1], 1, stack0);
        }
        // 7 0::IsJumpingState
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0::IsJumpingState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IsJumpingState = 2;
        } else {
            context.setproperty($names[2], 2, stack0);
        }
        // 7 0::IsFallingState
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = 3;// JIT: redundant assigment, value unused
        // 7 0::IsFallingState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IsFallingState = 3;
        } else {
            context.setproperty($names[3], 3, stack0);
        }
        // 7 0::IsMegaJumpingState
        stack0 = scope0.findScopeProperty($names[4], false, false);
//        stack1 = 4;// JIT: redundant assigment, value unused
        // 7 0::IsMegaJumpingState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IsMegaJumpingState = 4;
        } else {
            context.setproperty($names[4], 4, stack0);
        }
        // 7 0::IsHurtState
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = 5;// JIT: redundant assigment, value unused
        // 7 0::IsHurtState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IsHurtState = 5;
        } else {
            context.setproperty($names[5], 5, stack0);
        }
        // 7 0::IsLevelFinishedState
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = 6;// JIT: redundant assigment, value unused
        // 7 0::IsLevelFinishedState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IsLevelFinishedState = 6;
        } else {
            context.setproperty($names[6], 6, stack0);
        }
        // 7 0::IsGameOverState
        stack0 = scope0.findScopeProperty($names[7], false, false);
//        stack1 = 7;// JIT: redundant assigment, value unused
        // 7 0::IsGameOverState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IsGameOverState = 7;
        } else {
            context.setproperty($names[7], 7, stack0);
        }
        // 7 0::IsSwimmingState
        stack0 = scope0.findScopeProperty($names[8], false, false);
//        stack1 = 8;// JIT: redundant assigment, value unused
        // 7 0::IsSwimmingState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IsSwimmingState = 8;
        } else {
            context.setproperty($names[8], 8, stack0);
        }
        // 7 0::IsSplattedState
        stack0 = scope0.findScopeProperty($names[9], false, false);
//        stack1 = 9;// JIT: redundant assigment, value unused
        // 7 0::IsSplattedState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IsSplattedState = 9;
        } else {
            context.setproperty($names[9], 9, stack0);
        }
        // 7 0::AmountState
        stack0 = scope0.findScopeProperty($names[10], false, false);
//        stack1 = 10;// JIT: redundant assigment, value unused
        // 7 0::AmountState
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.AmountState = 10;
        } else {
            context.setproperty($names[10], 10, stack0);
        }
        // 7 0::WalkKeyAction
        stack0 = scope0.findScopeProperty($names[11], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::WalkKeyAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.WalkKeyAction = 0;
        } else {
            context.setproperty($names[11], 0, stack0);
        }
        // 7 0::ZeroXVelAction
        stack0 = scope0.findScopeProperty($names[12], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::ZeroXVelAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ZeroXVelAction = 1;
        } else {
            context.setproperty($names[12], 1, stack0);
        }
        // 7 0::JumpKeyAction
        stack0 = scope0.findScopeProperty($names[13], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0::JumpKeyAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.JumpKeyAction = 2;
        } else {
            context.setproperty($names[13], 2, stack0);
        }
        // 7 0::PositiveYVelAction
        stack0 = scope0.findScopeProperty($names[14], false, false);
//        stack1 = 3;// JIT: redundant assigment, value unused
        // 7 0::PositiveYVelAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PositiveYVelAction = 3;
        } else {
            context.setproperty($names[14], 3, stack0);
        }
        // 7 0::GroundCollisionAction
        stack0 = scope0.findScopeProperty($names[15], false, false);
//        stack1 = 4;// JIT: redundant assigment, value unused
        // 7 0::GroundCollisionAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.GroundCollisionAction = 4;
        } else {
            context.setproperty($names[15], 4, stack0);
        }
        // 7 0::NoGroundAction
        stack0 = scope0.findScopeProperty($names[16], false, false);
//        stack1 = 5;// JIT: redundant assigment, value unused
        // 7 0::NoGroundAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.NoGroundAction = 5;
        } else {
            context.setproperty($names[16], 5, stack0);
        }
        // 7 0::JumpedOverEnemyAction
        stack0 = scope0.findScopeProperty($names[17], false, false);
//        stack1 = 6;// JIT: redundant assigment, value unused
        // 7 0::JumpedOverEnemyAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.JumpedOverEnemyAction = 6;
        } else {
            context.setproperty($names[17], 6, stack0);
        }
        // 7 0::CollisionWithEnemyAction
        stack0 = scope0.findScopeProperty($names[18], false, false);
//        stack1 = 7;// JIT: redundant assigment, value unused
        // 7 0::CollisionWithEnemyAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CollisionWithEnemyAction = 7;
        } else {
            context.setproperty($names[18], 7, stack0);
        }
        // 7 0::LevelEndAction
        stack0 = scope0.findScopeProperty($names[19], false, false);
//        stack1 = 8;// JIT: redundant assigment, value unused
        // 7 0::LevelEndAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LevelEndAction = 8;
        } else {
            context.setproperty($names[19], 8, stack0);
        }
        // 7 0::GameOverAction
        stack0 = scope0.findScopeProperty($names[20], false, false);
//        stack1 = 9;// JIT: redundant assigment, value unused
        // 7 0::GameOverAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.GameOverAction = 9;
        } else {
            context.setproperty($names[20], 9, stack0);
        }
        // 7 0::CollisionWithHurtObject
        stack0 = scope0.findScopeProperty($names[21], false, false);
//        stack1 = 10;// JIT: redundant assigment, value unused
        // 7 0::CollisionWithHurtObject
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CollisionWithHurtObject = 10;
        } else {
            context.setproperty($names[21], 10, stack0);
        }
        // 7 0::GetsInsideWaterAction
        stack0 = scope0.findScopeProperty($names[22], false, false);
//        stack1 = 11;// JIT: redundant assigment, value unused
        // 7 0::GetsInsideWaterAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.GetsInsideWaterAction = 11;
        } else {
            context.setproperty($names[22], 11, stack0);
        }
        // 7 0::FatalCollisionWithWaterAction
        stack0 = scope0.findScopeProperty($names[23], false, false);
//        stack1 = 12;// JIT: redundant assigment, value unused
        // 7 0::FatalCollisionWithWaterAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.FatalCollisionWithWaterAction = 12;
        } else {
            context.setproperty($names[23], 12, stack0);
        }
        // 7 0::DownKeyPressedAction
        stack0 = scope0.findScopeProperty($names[24], false, false);
//        stack1 = 13;// JIT: redundant assigment, value unused
        // 7 0::DownKeyPressedAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DownKeyPressedAction = 13;
        } else {
            context.setproperty($names[24], 13, stack0);
        }
        // 7 0::DownKeyReleasedAction
        stack0 = scope0.findScopeProperty($names[25], false, false);
//        stack1 = 14;// JIT: redundant assigment, value unused
        // 7 0::DownKeyReleasedAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DownKeyReleasedAction = 14;
        } else {
            context.setproperty($names[25], 14, stack0);
        }
        // 7 0::MegaJumpAction
        stack0 = scope0.findScopeProperty($names[26], false, false);
//        stack1 = 15;// JIT: redundant assigment, value unused
        // 7 0::MegaJumpAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MegaJumpAction = 15;
        } else {
            context.setproperty($names[26], 15, stack0);
        }
        // 7 0::CheckpointRestoredAction
        stack0 = scope0.findScopeProperty($names[27], false, false);
//        stack1 = 16;// JIT: redundant assigment, value unused
        // 7 0::CheckpointRestoredAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CheckpointRestoredAction = 16;
        } else {
            context.setproperty($names[27], 16, stack0);
        }
        // 7 0::AmountAction
        stack0 = scope0.findScopeProperty($names[28], false, false);
//        stack1 = 17;// JIT: redundant assigment, value unused
        // 7 0::AmountAction
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.AmountAction = 17;
        } else {
            context.setproperty($names[28], 17, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1370_anonymous.js
})