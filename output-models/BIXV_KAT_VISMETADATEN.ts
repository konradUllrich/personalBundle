import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_KAT_VISMETADATENAttributes {
    STR_BESCHREIBUNG?: string;
    STRID: string;
    DTEDIT?: Date;
    DTINSERT?: Date;
    STR_INFORMATION?: string;
    STR_WERTTYP?: string;
    LUSERIDINSERT?: number;
    LUSERID?: number;
}

@Table({
	tableName: "BIXV_KAT_VISMETADATEN",
	timestamps: false 
})
export class BIXV_KAT_VISMETADATEN extends Model<BIXV_KAT_VISMETADATENAttributes, BIXV_KAT_VISMETADATENAttributes> implements BIXV_KAT_VISMETADATENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BESCHREIBUNG?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_INFORMATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_WERTTYP?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}