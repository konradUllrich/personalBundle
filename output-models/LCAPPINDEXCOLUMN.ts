import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPINDEXCOLUMNAttributes {
    STRGUID: string;
    STRAPPINDEXGUID: string;
    STRFIELDGUID: string;
    BASCENDING: boolean;
}

@Table({
	tableName: "LCAPPINDEXCOLUMN",
	timestamps: false 
})
export class LCAPPINDEXCOLUMN extends Model<LCAPPINDEXCOLUMNAttributes, LCAPPINDEXCOLUMNAttributes> implements LCAPPINDEXCOLUMNAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPINDEXGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRFIELDGUID!: string;

    @Column({
    	type: DataType.STRING 
    })
    	BASCENDING!: boolean;

}