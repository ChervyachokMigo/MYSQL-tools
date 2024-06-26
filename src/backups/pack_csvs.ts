import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "path";


export const pack_csvs = async (folder_path: string, archive_name: string, delete_files = false) => {
	if (!folder_path || !existsSync(folder_path)){
		throw new Error('Error in module "pack table to csv": no exists folder path');
	}

	if (!archive_name){
		throw new Error('Error in module "pack table to csv": no csv archive name');
	}

	const now = new Date();

	const filename =  `${archive_name}-${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.7z`;

	const archive_path = path.join(folder_path, filename);
	const files_pattern = path.join(folder_path, '*.csv');

	console.log('creating archive csv files:', filename);

	const exe = path.join(__dirname,'..', '..','bin','7z.exe');
	const args = [ 
		'a',    //add files
		'-y',   //assume yes
		'-mx9', //compression level
		delete_files ? '-sdel' : '',
		archive_path,
		files_pattern
	];
	const {stdout, stderr} = spawnSync(exe, args, {encoding: 'utf8'});

	console.log(stdout, stderr);
};