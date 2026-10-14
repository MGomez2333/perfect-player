# 篮球平行时空 · 独立王朝版

游戏： https://mgomez2333.github.io/perfect-player/basketball-parallel/

版本：20261014-r37。只提供王朝经营，不再构建球员生涯、棱彩、重打一场、他化自在等其他模式。

- 保留自由／考核模式、独立存档、专项培养、潜力突破开关、位置学习、单打职责、进攻发起及出手权重。
- 新增统一防守参与度：减少／原有／增加／核心。只改变防守事件参与权重，使用原有能力判定与体能事件负荷。
- 1984–85 至 1999–00 共16个早期开档赛季；按年代设置球队名称、迁移、扩军与东西部分区，补齐开档前历史荣誉。
- 加入新版头像、星二代拓展与能力／潜力分别抽取；原有夏训奖励名额最高5人。
- 保留数据库 nba-regret-dynasty-runtime-v2 与 nba-regret-dynasty-v1 旧档入口。新建档使用原有事务存档服务，不清除或覆盖已有档。

## 构建

`python basketball-parallel/build.py`

`dynasty-source.part*` 是固定的王朝源模块快照，`dynasty-source-manifest.json` 校验每个模块。构建应用本项目培养、经理、选秀补丁，缓存全部外部图片，并生成独立入口。`obsolete-files.json` 在成功构建后清除旧的多模式代码。新版经营规则开关保持关闭。

GitHub Actions 运行模拟/数据/存档相关回归后，提交生成产物，由现有 Pages 流程发布。
