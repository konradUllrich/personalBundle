import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface FT_T_FEIERTAGEAttributes {
    STRID: string;
    DT_DATUM?: Date;
    LUSERID?: number;
    L_JAHR?: number;
    DTEDIT?: Date;
    STR_FEIERTAG?: string;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
}

@Table({
	tableName: "FT_T_FEIERTAGE",
	timestamps: false 
})
export class FT_T_FEIERTAGE extends Model<FT_T_FEIERTAGEAttributes, FT_T_FEIERTAGEAttributes> implements FT_T_FEIERTAGEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_JAHR?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FEIERTAG?: string;

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

}