# ============================================================
# auto-deploy.ps1 — Organnah V2
# Detecta mudancas e faz push automatico para o GitHub
# ============================================================
# USO:
#   .\auto-deploy.ps1
#   .\auto-deploy.ps1 -Message "ajuste no hero"
# ============================================================

param(
    [string]$Message = ""
)

# Cores no terminal
function Write-Success { Write-Host $args -ForegroundColor Green }
function Write-Info    { Write-Host $args -ForegroundColor Cyan }
function Write-Warn    { Write-Host $args -ForegroundColor Yellow }
function Write-Fail    { Write-Host $args -ForegroundColor Red }

Write-Info "`n🌿 Organnah V2 — Auto Deploy`n"

# Verificar se git esta instalado
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Fail "❌ Git nao encontrado. Instale em: https://git-scm.com/download/win"
    exit 1
}

# Ir para a raiz do projeto
$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectRoot

# Verificar se e um repositorio git
if (-not (Test-Path ".git")) {
    Write-Fail "❌ Repositorio Git nao inicializado."
    Write-Warn "   Execute primeiro:"
    Write-Warn "   git init"
    Write-Warn "   git remote add origin https://github.com/SEU_USUARIO/organah-v2.git"
    exit 1
}

# Verificar se ha remote configurado
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Fail "❌ Nenhum remote 'origin' configurado."
    Write-Warn "   Execute: git remote add origin https://github.com/SEU_USUARIO/organah-v2.git"
    exit 1
}

Write-Info "📡 Remote: $remote"

# Verificar se ha mudancas
$status = git status --porcelain
if (-not $status) {
    Write-Warn "✅ Nenhuma mudanca detectada. Projeto ja esta atualizado no GitHub!"
    exit 0
}

Write-Info "📝 Mudancas detectadas:"
git status --short

# Montar mensagem do commit
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
if ($Message -eq "") {
    $commitMsg = "chore: auto-deploy $timestamp"
} else {
    $commitMsg = "$Message ($timestamp)"
}

# Adicionar tudo
Write-Info "`n➕ Adicionando arquivos..."
git add .

# Commit
Write-Info "💾 Commit: $commitMsg"
git commit -m $commitMsg

if ($LASTEXITCODE -ne 0) {
    Write-Fail "❌ Erro ao fazer commit."
    exit 1
}

# Push
Write-Info "🚀 Enviando para o GitHub..."
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Success "`n✅ Upload concluido com sucesso!"
    Write-Success "   $remote"
} else {
    Write-Fail "`n❌ Erro no push. Verifique sua conexao e autenticacao no GitHub."
    Write-Warn "   Dica: rode 'git push origin main' manualmente para ver o erro detalhado."
    exit 1
}
