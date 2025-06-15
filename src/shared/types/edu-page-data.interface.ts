interface Tables {
	id: string
	def: Def
	data_rows: DataRows[]
	data_columns: string[]
}

interface Def {
	id: string
	name: string
	item_name: string
}

interface DataRows {
	id: string
	name: string
	short: string

	period: string
	starttime: string
	endtime: string

	tt_num: string
	tt_day: number
}

export interface EduPageData {
	r: {
		type: string
		dbid: string
		tables: Tables[]
	}
}
