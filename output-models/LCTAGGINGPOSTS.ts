import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCTAGGINGPOSTSAttributes {
    STRID: string;
    FK_GUID: string;
    STR_PROFILEID: string;
    STR_APPGUID: string;
    STR_DGGUID: string;
    STR_RECID: string;
    B_ISSHOW: boolean;
    B_AUTOINSERT: boolean;
    DT_INSERT: Date;
}

@Table({
	tableName: "LCTAGGINGPOSTS",
	timestamps: false 
})
export class LCTAGGINGPOSTS extends Model<LCTAGGINGPOSTSAttributes, LCTAGGINGPOSTSAttributes> implements LCTAGGINGPOSTSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	FK_GUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STR_PROFILEID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STR_APPGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STR_DGGUID!: string;

    @Column({
    	type: DataType.STRING(2000) 
    })
    	STR_RECID!: string;

    @Column({
    	type: DataType.STRING 
    })
    	B_ISSHOW!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	B_AUTOINSERT!: boolean;

    @Column({
    	type: DataType.DATE(7) 
    })
    	DT_INSERT!: Date;

}