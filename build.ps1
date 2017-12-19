
Start-Process powershell "-noexit -c cmd.exe /c 'Echo building appA&dotnet run --project .\AppA\AppA.csproj --no-restore --no-dependencies&pause' "
Start-Process powershell "-noexit -c cmd.exe /c 'Echo building appB&dotnet run --project .\AppB\AppB.csproj --no-restore --no-dependencies&pause' "