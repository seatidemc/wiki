# 控制台后端

- 仓库地址：https://github.com/Subilan/go-aliyunmc
- 编程语言：Golang
- 推荐使用Harness：Claude Code, Codex, Pi

## 新功能开发流程

1. 提出需求，记录在[运营仓库](https://github.com/seatidemc/operations)的Issue中，并录入[Seatide运营项目看板](https://github.com/users/Subilan/projects/3)
2. 新增 `feature/` 前缀分支，实现需求
3. 开发环境验证
4. 发布

## 问题修复流程

1. 识别Bug现象，给出完整描述
2. 针对现有代码，分析原因
3. 新增 `fix/` 前缀分支，实施修复
4. 开发环境验证
5. 发布

## 仓库分支约定

仓库的主干分支为 `main`。主干分支是当前正在运行的生产代码来源，任何代码都需要经过在开发环境下的测试验收、Code Review才能合入此分支。生产服务地址为https://api.seatide.net。

除了 `main` 以外的分支均为开发分支，通常有两种前缀：
- `fix/*` 表示对已知问题的修复
- `feature/*` 表示对新功能的实现

## 发布流程

1. 生成版本提交：在开发分支的最后一次提交之后，合并到主干分支之前，更新项目根目录的VERSION文件，写入当前要发布的版本号。此版本号遵循semver规范。除了手动编写、提交外，还可以在根目录下执行 `make bump BUMP=major|minor|patch` 自动更新版本并生成一次提交。
2. 合并、推送与测试：将开发分支合并到主干并推送，若无合并权限需要开Pull Request。完成推送后CI将自动运行测试，等待测试通过即可。
3. 执行发布：到发布仓库（seatidemc/production，仅成员可见）下，修改配置文件、增删资源文件以适应当前主干版本的要求，并将app-ref文件的内容更改为第1步中版本提交的完整SHA值。所有内容修改完毕后，提交并推送，此时CI将自动开始部署流程。

以上任何一个环节出现中断，都会导致发布不成功。通常这类失败不会影响线上版本，但如果错误发生在部署流程中，此时需要立即排查原因并修复。