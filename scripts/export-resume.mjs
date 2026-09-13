import process from 'node:process'
import { exportResume } from './lib/resume-artifacts.mjs'

try {
  await exportResume({ checkPdf: process.argv.includes('--check-pdf') })
  process.stdout.write('Резюме: HTML и TXT обновлены из src/content.\n')
} catch (error) {
  process.stderr.write(`${error.message}\n`)
  process.exitCode = 1
}
