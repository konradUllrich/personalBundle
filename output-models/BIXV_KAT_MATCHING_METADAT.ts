import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_KAT_MATCHING_METADATAttributes {
    LUSERID?: number;
    DTEDIT?: Date;
    STRID: string;
    FKLID?: number;
    REF_2F300655?: string;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STR_BEZEICHNUNGANTRAG?: string;
    B_AKTENEBENE?: boolean;
}

@Table({
	tableName: "BIXV_KAT_MATCHING_METADAT",
	timestamps: false 
})
export class BIXV_KAT_MATCHING_METADAT extends Model<BIXV_KAT_MATCHING_METADATAttributes, BIXV_KAT_MATCHING_METADATAttributes> implements BIXV_KAT_MATCHING_METADATAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_2F300655?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BEZEICHNUNGANTRAG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_AKTENEBENE?: boolean;

}