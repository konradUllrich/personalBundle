import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCLINKEDRECORDSAttributes {
    L_ID: number;
    DT_INSERT: Date;
    L_USERID_INSERT: number;
    DT_LAST_EDIT: Date;
    L_USERID_LAST_EDIT: number;
    STR_SOURCE_APP_GUID: string;
    STR_SOURCE_DG_GUID: string;
    STR_SOURCE_REC_PK: string;
    STR_TARGET_APP_GUID: string;
    STR_TARGET_DG_GUID: string;
    STR_TARGET_REC_PK: string;
    STR_PLUGIN_GUID: string;
    B_ACTIVE: boolean;
}

@Table({
	tableName: "LCLINKEDRECORDS",
	timestamps: false 
})
export class LCLINKEDRECORDS extends Model<LCLINKEDRECORDSAttributes, LCLINKEDRECORDSAttributes> implements LCLINKEDRECORDSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	L_ID!: number;

    @Column({
    	type: DataType.DATE(7) 
    })
    	DT_INSERT!: Date;

    @Column({
    	type: DataType.INTEGER 
    })
    	L_USERID_INSERT!: number;

    @Column({
    	type: DataType.DATE(7) 
    })
    	DT_LAST_EDIT!: Date;

    @Column({
    	type: DataType.INTEGER 
    })
    	L_USERID_LAST_EDIT!: number;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STR_SOURCE_APP_GUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STR_SOURCE_DG_GUID!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STR_SOURCE_REC_PK!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STR_TARGET_APP_GUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STR_TARGET_DG_GUID!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STR_TARGET_REC_PK!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STR_PLUGIN_GUID!: string;

    @Column({
    	type: DataType.STRING 
    })
    	B_ACTIVE!: boolean;

}