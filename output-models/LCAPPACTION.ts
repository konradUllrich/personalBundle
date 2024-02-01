import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPACTIONAttributes {
    STRGUID: string;
    STRAPPFUPGUID: string;
    STRACTION: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPACTION",
	timestamps: false 
})
export class LCAPPACTION extends Model<LCAPPACTIONAttributes, LCAPPACTIONAttributes> implements LCAPPACTIONAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPFUPGUID!: string;

    @Column({
    	type: DataType.STRING(128) 
    })
    	STRACTION!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTSETTINGS?: string;

}