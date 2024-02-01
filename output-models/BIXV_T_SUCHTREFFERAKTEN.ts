import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_T_SUCHTREFFERAKTENAttributes {
    DTEDIT?: Date;
    B_ZUORDNUNG?: boolean;
    STR_URL?: string;
    STR_TITEL?: string;
    STRID: string;
    DTINSERT?: Date;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    FKSTRID?: string;
    STR_AKTENID?: string;
}

@Table({
	tableName: "BIXV_T_SUCHTREFFERAKTEN",
	timestamps: false 
})
export class BIXV_T_SUCHTREFFERAKTEN extends Model<BIXV_T_SUCHTREFFERAKTENAttributes, BIXV_T_SUCHTREFFERAKTENAttributes> implements BIXV_T_SUCHTREFFERAKTENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ZUORDNUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_URL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AKTENID?: string;

}