import datetime


def sodien(c):
  sodien = datetime.date.today()
  # rit = datetime.date.today() + datetime.timedelta(days=1)
  # sodien.month
  # sodien.day
  # sodien.year

  c.execute('SELECT vards FROM vardadienas WHERE menesis=? AND diena=?', (sodien.month, sodien.day))
  vardi = c.fetchall()
  return vardi


def varda_datums(c, vards):
  c.execute('SELECT menesis, diena FROM vardadienas WHERE vards=?', (vards,))
  datums = c.fetchone()
  return datums


def mekle_pec_burtiem(c, burti):
  c.execute('SELECT vards FROM vardadienas WHERE vards LIKE ?', ('%'+burti+'%', ))
  vardi = c.fetchall()
  return vardi
