#!/usr/bin/perl

@files = `ls | grep -v some`;
$i = 1;

for(@files) {
  chomp($_);
  rename($_, "$i.jpg");
  $i++;
}
